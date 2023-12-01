import { Hono } from 'hono';
import { AppResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

app.get('/', async (c) => {
  const manufacturers = await prisma.manufacturer.findMany();
  return c.json(AppResponse.success(manufacturers));
});

app.get('/:manufacturerId', async (c) => {
  const { manufacturerId } = c.req.param();
  const manufacturer = await prisma.manufacturer.findUnique({ where: { id: Number(manufacturerId) } });

  if (!manufacturer) {
    throw new HTTPException(401, AppResponse.failure('Not found'));
  }

  return c.json(AppResponse.success(manufacturer));
});

app.get('/:manufacturerId/products', async (c) => {
  const products = await prisma.product.findMany();
  return c.json(AppResponse.success(products));
});

app.get('/:manufacturerId/products/:productId', async (c) => {
  const { productId } = c.req.param();
  const product = await prisma.product.findUnique({ where: { id: Number(productId) } });

  if (!product) {
    throw new HTTPException(401, AppResponse.failure('Not found'));
  }

  return c.json(AppResponse.success(product));
});

export default app;
