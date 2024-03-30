import { createHonoApp } from '@/libs/hono';
import { prisma } from '@/libs/prisma';
import { sign, verify } from '@/libs/utils/jwt';
import { safeParseInt } from '@/libs/utils/parseInt';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';
import { createRoute, z } from '@hono/zod-openapi';
import { AppResponse, Role } from '@olienttech/model';

const app = createHonoApp();

app.openapi(
  createRoute({
    method: 'post',
    description: '販売会社でログインする',
    path: '/signin',
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
                id: z.string(),
                name: z.string(),
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

    return c.jsonT(AppResponse.success({ id, name: shopOnPrisma.name, token }));
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
    return c.json(AppResponse.failure('Token not set'), 401);
  }

  const payload = await verify(token);

  // 適切なロールでないとき
  if (payload.role !== Role.Shop) {
    return c.json(AppResponse.failure('Not an appropriate roll'), 401);
  }

  const shop = await prisma.shop.findUnique({
    where: { id: shopId },
  });

  // 販売会社が存在しないとき
  if (!shop) {
    return c.json(AppResponse.failure('Not Found'), 404);
  }

  // 自分のIDでないとき
  if (payload.id !== shopId) {
    return c.json(AppResponse.failure('Not your ID'), 401);
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
    description: '製造会社の取り扱いしている商品一覧を取得する',
    path: '/{shopId}/partner-manufacturers/{manufacturerId}/products',
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
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                products: z.array(
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
                pageMeta: z.object({
                  isFirstPage: z.boolean(),
                  isLastPage: z.boolean(),
                  currentPage: z.number(),
                  previousPage: z.number().nullable(),
                  nextPage: z.number().nullable(),
                  pageCount: z.number(),
                  totalCount: z.number(),
                }),
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
    const { page, limit } = c.req.valid('query');

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
            manufacturer: true,
          },
        },
      },
    });

    if (shop === null) {
      return c.jsonT(AppResponse.failure('Shopが見つかりません'), 404);
    }

    const partnerManufacturers = shop.partnerManufacturers;
    if (partnerManufacturers.length === 0) {
      return c.jsonT(AppResponse.failure('PartnerManufacturerではありません'), 500);
    }

    const [products, meta] = await prisma.manufacturerHandlingProducts
      .paginate({
        where: {
          manufacturerId,
        },
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
      })
      .withPages({
        limit: safeParseInt(limit) ?? 9999,
        page: safeParseInt(page) ?? 1,
      });

    return c.jsonT(
      AppResponse.success({
        products: products.map((v) => ({
          id: v.product.id,
          name: v.product.name,
          description: v.product.description,
          categories: v.product.categories.map((v) => ({ id: v.category.id, name: v.category.name })),
          stock: v.stock,
        })),
        pageMeta: meta,
      }),
    );
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '発注書一覧を取得する',
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
                  manufacturer: z.object({
                    id: z.string(),
                    name: z.string(),
                    description: z.string(),
                  }),
                  approved: z.boolean(),
                  orderAt: z.string(),
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

    const orders = await prisma.order.findMany({
      where: {
        shopId,
      },
      select: {
        id: true,
        manufacturer: true,
        approved: true,
        orderAt: true,
      },
    });

    return c.jsonT(AppResponse.success(orders.map((order) => ({ ...order, orderAt: order.orderAt.toISOString() }))));
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

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        partnerManufacturers: true,
      },
    });
    const partnerManufacturers = shop?.partnerManufacturers ?? [];
    if (!partnerManufacturers.find((v) => v.manufacturerId === manufacturerId)) {
      return c.jsonT(AppResponse.failure('PartnerManufacturerではありません'), 500);
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
