import { createHonoApp } from '@/libs/hono';
import { prisma } from '@/libs/prisma';
import { Role, sign } from '@/libs/utils/jwt';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';
import { createRoute, z } from '@hono/zod-openapi';
import { AppResponse, Shop } from '@olienttech/model';
import { HTTPException } from 'hono/http-exception';

const app = createHonoApp();

app.openapi(
  createRoute({
    method: 'post',
    description: '販売会社でログインする',
    path: '/singin',
    tags: ['shop'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: z.object({
              id: z.string(),
              password: z.string(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                token: z.string(),
              }),
            ),
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
      404: {
        description: 'Not found',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const { id, password } = c.req.valid('json');

    const shopOnPrisma = await prisma.shop.findUnique({
      where: { id },
    });
    if (shopOnPrisma === null) {
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    // NOTE: 一旦パスワードは固定
    if (password !== 'hoge') {
      return c.jsonT(AppResponse.failure('Unauthorized'), 401);
    }

    const token = await sign({
      id,
      role: Role.Shop,
    });

    return c.jsonT(AppResponse.success({ token }));
  },
);

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
    where: { id: shopId },
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
