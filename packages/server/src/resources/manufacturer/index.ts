import { Hono } from 'hono';
import { AppResponse, Manufacturer, Product } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

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
    where: { id: Number(manufacturerId) },
  });

  if (!manufacturerOnPrisma) {
    throw new HTTPException(401, AppResponse.failure('Not found'));
  }

  const manufacturer: Manufacturer = {
    id: manufacturerOnPrisma.id,
    name: manufacturerOnPrisma.name,
    description: manufacturerOnPrisma.description,
  };

  return c.json(AppResponse.success(manufacturer));
});

app.get('/:manufacturerId/products', async (c) => {
  const productsOnPrisma = await prisma.product.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const products: Product[] = productsOnPrisma.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    categories: product.categories.map(({ category }) => ({
      id: category.id,
      name: category.name,
    })),
    image: 'https://github.com/Alesion30',
  }));

  return c.json(AppResponse.success(products));
});

app.get('/:manufacturerId/products/:productId', async (c) => {
  const { productId } = c.req.param();
  const productOnPrisma = await prisma.product.findUnique({
    where: {
      id: Number(productId),
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  if (!productOnPrisma) {
    throw new HTTPException(401, AppResponse.failure('Not Found'));
  }

  const product: Product = {
    id: productOnPrisma.id,
    name: productOnPrisma.name,
    description: productOnPrisma.description,
    categories: productOnPrisma.categories.map(({ category }) => ({
      id: category.id,
      name: category.name,
    })),
    image: 'https://github.com/Alesion30',
  };

  return c.json(AppResponse.success(product));
});

export default app;
