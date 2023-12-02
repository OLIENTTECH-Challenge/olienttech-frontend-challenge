import { prisma } from '@/libs/prisma';
import { AppResponse, Shop } from '@olienttech/model';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

app.get('/', async (c) => {
  const shopOnPrisma = await prisma.shop.findMany();

  const shops: Shop[] = shopOnPrisma.map((shop) => ({
    id: shop.id,
    name: shop.name,
    description: shop.description,
  }));

  return c.json(AppResponse.success(shops));
});

app.get('/:shopId', async (c) => {
  const { shopId } = c.req.param();
  const shopOnPrisma = await prisma.shop.findUnique({
    where: { id: Number(shopId) },
  });

  if (!shopOnPrisma) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  const shop: Shop = {
    id: shopOnPrisma.id,
    name: shopOnPrisma.name,
    description: shopOnPrisma.description,
  };

  return c.json(AppResponse.success(shop));
});

export default app;
