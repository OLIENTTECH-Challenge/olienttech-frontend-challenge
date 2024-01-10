import { Hono } from 'hono';
import { AppResponse, Manufacturer, ManufacturerHandlingProduct } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';

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

export default app;
