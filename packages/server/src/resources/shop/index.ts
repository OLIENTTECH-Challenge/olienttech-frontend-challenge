import { createHonoApp } from '@/libs/hono';
import { prisma } from '@/libs/prisma';
import { sign, verify } from '@/libs/utils/jwt';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';
import { createRoute, z } from '@hono/zod-openapi';
import { AppResponse, Role } from '@olienttech/model';

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
      500: {
        description: 'Server Error',
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

/**
 * 販売会社情報を取得するミドルウェア
 */
app.use('/:shopId/*', async (c, next) => {
  const { shopId } = c.req.param();
  const token = c.req.header('Authorization')?.replace('Bearer ', '');

  // トークンがセットされていないとき
  if (token === undefined) {
    return c.json(AppResponse.failure('Unauthorized'), 401);
  }

  const payload = await verify(token);

  // 適切なロールでないとき
  if (payload.role !== Role.Shop) {
    return c.json(AppResponse.failure('Unauthorized'), 401);
  }

  // 自分のIDでないとき
  if (payload.id !== shopId) {
    return c.json(AppResponse.failure('Unauthorized'), 401);
  }

  await next();
});

app.openapi(
  createRoute({
    method: 'get',
    description: '販売会社情報を取得する',
    path: '/{shopId}',
    tags: ['shop'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        shopId: z.string(),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                id: z.string(),
                name: z.string(),
                description: z.string(),
              }),
            ),
          },
        },
      },
      500: {
        description: 'Server Error',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const { shopId } = c.req.valid('param');

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });

    if (shop === null) {
      return c.jsonT(AppResponse.failure('Shopが見つかりません'), 404);
    }

    return c.jsonT(
      AppResponse.success({
        id: shop.id,
        name: shop.name,
        description: shop.description,
      }),
    );
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '取引可能な製造会社一覧を取得する',
    path: '/{shopId}/partner-manufacturers',
    tags: ['shop'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        shopId: z.string(),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
                  description: z.string(),
                }),
              ),
            ),
          },
        },
      },
      500: {
        description: 'Server Error',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const { shopId } = c.req.valid('param');

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        partnerManufacturers: {
          include: {
            manufacturer: true,
          },
        },
      },
    });

    if (shop === null) {
      return c.jsonT(AppResponse.failure('Shopが見つかりません'), 404);
    }

    const partnerManufacturers = shop.partnerManufacturers.map((v) => v.manufacturer);
    return c.jsonT(AppResponse.success(partnerManufacturers));
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社情報を取得する',
    path: '/{shopId}/partner-manufacturers/{manufacturerId}',
    tags: ['shop'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        shopId: z.string(),
        manufacturerId: z.string(),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                id: z.string(),
                name: z.string(),
                description: z.string(),
                handlingProducts: z.array(
                  z.object({
                    id: z.string(),
                    name: z.string(),
                    description: z.string(),
                    categories: z.array(
                      z.object({
                        id: z.string(),
                        name: z.string(),
                      }),
                    ),
                    stock: z.number(),
                  }),
                ),
              }),
            ),
          },
        },
      },
      500: {
        description: 'Server Error',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const { shopId, manufacturerId } = c.req.valid('param');

    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId,
        partnerManufacturers: {
          some: {
            manufacturerId,
          },
        },
      },
      include: {
        partnerManufacturers: {
          include: {
            manufacturer: {
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
            },
          },
        },
      },
    });

    if (shop === null) {
      return c.jsonT(AppResponse.failure('Shopが見つかりません'), 404);
    }

    const partnerManufacturers = shop.partnerManufacturers;
    if (partnerManufacturers.length === 0) {
      return c.jsonT(AppResponse.failure('PartnerManufacturerが見つかりません'), 404);
    }

    const partnerManufacturer = partnerManufacturers[0];

    const manufacturer = partnerManufacturer.manufacturer;

    return c.jsonT(
      AppResponse.success({
        id: manufacturer.id,
        name: manufacturer.name,
        description: manufacturer.description,
        handlingProducts: manufacturer.handlingProducts.map((v) => ({
          id: v.product.id,
          name: v.product.name,
          description: v.product.description,
          categories: v.product.categories.map((v) => ({ id: v.category.id, name: v.category.name })),
          stock: v.stock,
        })),
      }),
    );
  },
);

app.openapi(
  createRoute({
    method: 'post',
    description: '発注書を発行する',
    path: '/{shopId}/orders',
    tags: ['shop'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        shopId: z.string(),
      }),
      body: {
        content: {
          'application/json': {
            schema: z.object({
              manufacturerId: z.string(),
              items: z.array(
                z.object({
                  productId: z.string(),
                  quantity: z.number(),
                }),
              ),
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
            schema: SuccessResponseSchema(z.object({})),
          },
        },
      },
      500: {
        description: 'Server Error',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const { shopId } = c.req.valid('param');
    const { manufacturerId, items } = c.req.valid('json');

    if (items.filter((item) => item.quantity <= 0).length > 0) {
      return c.jsonT(AppResponse.failure('quantityは0以上で入力してください'), 422);
    }

    await prisma.order.create({
      data: {
        shopId,
        manufacturerId,
        items: {
          create: items.map((item) => ({
            product: {
              connect: {
                id: item.productId,
              },
            },
            quantity: item.quantity,
          })),
        },
      },
    });

    return c.jsonT(AppResponse.success({}));
  },
);

export default app;
