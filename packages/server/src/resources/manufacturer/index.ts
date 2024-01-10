import { Hono } from 'hono';
import { AppResponse, Manufacturer, ManufacturerHandlingProduct } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';
import { Role, verify } from '@/libs/utils/jwt';

const app = new Hono();

// NOTE: 管理者のみアクセスできるようにする
app.get('/', async (c) => {
  const manufacturersOnPrisma = await prisma.manufacturer.findMany();
  const manufacturers: Manufacturer[] = manufacturersOnPrisma.map((manufacturer) => {
    return {
      id: manufacturer.id,
      name: manufacturer.name,
      description: manufacturer.description,
    };
  });

  return c.json(AppResponse.success(manufacturers));
});

app.use('/:manufacturerId/*', async (c, next) => {
  const { manufacturerId } = c.req.param();
  const token = c.req.header('Authorization')?.replace('Bearer ', '');

  // トークンがセットされていないとき
  if (token === undefined) {
    throw new HTTPException(401, AppResponse.failure('Unauthorized'));
  }

  const payload = await verify(token);

  // 適切なロールでないとき
  if (payload.role !== Role.Manufacturer) {
    throw new HTTPException(401, AppResponse.failure('Unauthorized'));
  }

  // 自分のIDでないとき
  if (payload.id !== manufacturerId) {
    throw new HTTPException(401, AppResponse.failure('Unauthorized'));
  }

  await next();
});

/**
 * 製造会社情報を取得する
 */
app.get('/:manufacturerId', async (c) => {
  const { manufacturerId } = c.req.param();

  const manufacturerOnPrisma = await prisma.manufacturer.findUnique({
    where: { id: manufacturerId },
  });

  if (!manufacturerOnPrisma) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  const manufacturer: Manufacturer = {
    id: manufacturerOnPrisma.id,
    name: manufacturerOnPrisma.name,
    description: manufacturerOnPrisma.description,
  };

  return c.json(AppResponse.success(manufacturer));
});

/**
 * 製造会社が扱っている商品を取得する
 */
app.get('/:manufacturerId/handling-products', async (c) => {
  const { manufacturerId } = c.req.param();

  const manufacturerOnPrisma = await prisma.manufacturer.findUnique({
    where: { id: manufacturerId },
    include: {
      handlingProducts: {
        include: {
          product: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!manufacturerOnPrisma) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  const handlingProducts: ManufacturerHandlingProduct[] = manufacturerOnPrisma.handlingProducts.map(
    ({ id, stock, product }) => ({
      id,
      stock,
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        categories: product.categories.map(({ category }) => ({
          id: category.id,
          name: category.name,
        })),
        image: 'https://github.com/Alesion30',
      },
    }),
  );

  return c.json(AppResponse.success(handlingProducts));
});

/**
 * 製造会社の商品情報を取得する
 */
app.get('/:manufacturerId/handling-products/:productId', async (c) => {
  const { manufacturerId, productId } = c.req.param();

  const manufacturerHandlingProduct = await prisma.manufacturerHandlingProducts.findFirst({
    where: {
      manufacturerId,
      productId,
    },
    select: {
      id: true,
      stock: true,
      product: {
        select: {
          id: true,
          name: true,
          description: true,
          categories: {
            select: {
              category: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (manufacturerHandlingProduct === null) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  return c.json(AppResponse.success(manufacturerHandlingProduct));
});

/**
 * 製造会社の商品の在庫数を更新する
 */
app.post('/:manufacturerId/handling-products/:productId/stock', async (c) => {
  const { manufacturerId, productId } = c.req.param();
  const { stock } = await c.req.json<{ stock: number }>();

  const manufacturerHandlingProduct = await prisma.manufacturerHandlingProducts.findFirst({
    where: {
      manufacturerId,
      productId,
    },
    select: {
      id: true,
    },
  });

  if (manufacturerHandlingProduct === null) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  const newManufacturerHandlingProduct = await prisma.manufacturerHandlingProducts.update({
    select: {
      stock: true,
    },
    data: {
      stock,
    },
    where: {
      id: manufacturerHandlingProduct.id,
    },
  });

  return c.json(AppResponse.success(newManufacturerHandlingProduct));
});

export default app;
