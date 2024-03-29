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
    description: '製造会社でログインする',
    path: '/signin',
    tags: ['manufacturer'],
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

    const manufacturer = await prisma.manufacturer.findUnique({
      where: { id },
    });
    if (manufacturer === null) {
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    // NOTE: 一旦パスワードは固定
    if (password !== 'hoge') {
      return c.jsonT(AppResponse.failure('Unauthorized'), 401);
    }

    const token = await sign({
      id,
      role: Role.Manufacturer,
    });

    return c.jsonT(AppResponse.success({ id, name: manufacturer.name, token }));
  },
);

/**
 * 製造会社情報を取得するミドルウェア
 */
app.use('/:manufacturerId/*', async (c, next) => {
  const { manufacturerId } = c.req.param();
  const token = c.req.header('Authorization')?.replace('Bearer ', '');

  // トークンがセットされていないとき
  if (token === undefined) {
    return c.json(AppResponse.failure('Token not set'), 401);
  }

  const payload = await verify(token);

  // 適切なロールでないとき
  if (payload.role !== Role.Manufacturer) {
    return c.json(AppResponse.failure('Not an appropriate roll'), 401);
  }

  const manufacturer = await prisma.manufacturer.findUnique({
    where: { id: manufacturerId },
  });

  // 製造会社が存在しないとき
  if (!manufacturer) {
    return c.json(AppResponse.failure('Not Found'), 404);
  }

  // 自分のIDでないとき
  if (payload.id !== manufacturerId) {
    return c.json(AppResponse.failure('Not your ID'), 401);
  }

  await next();
});

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社情報を取得する',
    path: '/{manufacturerId}',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
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
    const { manufacturerId } = c.req.valid('param');

    const manufacturer = await prisma.manufacturer.findUnique({
      where: { id: manufacturerId },
    });

    if (!manufacturer) {
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    return c.jsonT(
      AppResponse.success({
        id: manufacturer.id,
        name: manufacturer.name,
        description: manufacturer.description,
      }),
    );
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社の取り扱いしている商品一覧を取得する',
    path: '/{manufacturerId}/handling-products',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        manufacturerId: z.string(),
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
                  categories: z.array(
                    z.object({
                      id: z.string(),
                      name: z.string(),
                    }),
                  ),
                  stock: z.number(),
                  price: z.number(),
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
    const { manufacturerId } = c.req.param();

    const manufacturer = await prisma.manufacturer.findUnique({
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

    if (!manufacturer) {
      return c.jsonT(AppResponse.failure('Not found manufacturer'), 404);
    }

    const handlingProducts = manufacturer.handlingProducts.map(({ stock, price, product }) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      categories: product.categories.map(({ category }) => ({
        id: category.id,
        name: category.name,
      })),
      price,
      stock,
    }));

    return c.jsonT(AppResponse.success(handlingProducts));
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社の商品情報を取得する',
    path: '/{manufacturerId}/handling-products/{productId}',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        manufacturerId: z.string(),
        productId: z.string(),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                id: z.number(),
                stock: z.number(),
                price: z.number(),
                product: z.object({
                  id: z.string(),
                  name: z.string(),
                  description: z.string(),
                  categories: z.array(
                    z.object({
                      category: z.object({
                        id: z.string(),
                        name: z.string(),
                      }),
                    }),
                  ),
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
    const { manufacturerId, productId } = c.req.param();

    const manufacturerHandlingProduct = await prisma.manufacturerHandlingProducts.findFirst({
      where: {
        manufacturerId,
        productId,
      },
      select: {
        id: true,
        stock: true,
        price: true,
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
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    return c.jsonT(AppResponse.success(manufacturerHandlingProduct));
  },
);

app.openapi(
  createRoute({
    method: 'put',
    description: '製造会社の商品の在庫数を更新する',
    path: '/{manufacturerId}/handling-products/{productId}/stock',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        manufacturerId: z.string(),
        productId: z.string(),
      }),
      body: {
        content: {
          'application/json': {
            schema: z.object({
              stock: z.number(),
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
                stock: z.number(),
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
    const { manufacturerId, productId } = c.req.valid('param');
    const { stock } = c.req.valid('json');

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
      return c.jsonT(AppResponse.failure('Not found'), 404);
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

    return c.jsonT(AppResponse.success(newManufacturerHandlingProduct));
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社の発注書一覧を取得する',
    path: '/{manufacturerId}/orders',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        manufacturerId: z.string(),
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
                  shop: z.object({
                    id: z.string(),
                    name: z.string(),
                    description: z.string(),
                  }),
                  approved: z.boolean(),
                  orderAt: z.string(),
                  totalPrice: z.number(),
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
    const { manufacturerId } = c.req.valid('param');

    const orders = await prisma.order.findMany({
      where: {
        manufacturerId,
      },
      include: {
        shop: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    const orderProductIds = Array.from(new Set(orders.flatMap((order) => order.items.map((item) => item.productId))));

    const handlingProducts = await prisma.manufacturerHandlingProducts.findMany({
      where: {
        manufacturerId,
        productId: { in: orderProductIds },
      },
      select: {
        price: true,
        productId: true,
      },
    });

    return c.jsonT(
      AppResponse.success(
        orders.map((order) => ({
          id: order.id,
          shop: order.shop,
          approved: order.approved,
          orderAt: order.orderAt.toISOString(),
          totalPrice: order.items.reduce(
            (curr, order) =>
              order.quantity * (handlingProducts.find((v) => v.productId === order.productId)?.price ?? 0) + curr,
            0,
          ),
        })),
      ),
    );
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社の発注書を取得する',
    path: '/{manufacturerId}/orders/{orderId}',
    tags: ['manufacturer'],
    security: [
      {
        Bearer: [],
      },
    ],
    request: {
      params: z.object({
        manufacturerId: z.string(),
        orderId: z.string(),
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
                shop: z.object({
                  id: z.string(),
                  name: z.string(),
                  description: z.string(),
                }),
                approved: z.boolean(),
                orderAt: z.string(),
                items: z.array(
                  z.object({
                    product: z.object({
                      id: z.string(),
                      name: z.string(),
                      description: z.string(),
                    }),
                    stock: z.number().optional(),
                    price: z.number().optional(),
                    quantity: z.number(),
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
    const { manufacturerId, orderId } = c.req.valid('param');

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        shop: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (order === null) {
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    const orderProductIds = order.items.map((item) => item.productId);

    const handlingProducts = await prisma.manufacturerHandlingProducts.findMany({
      where: {
        manufacturerId,
        productId: { in: orderProductIds },
      },
      select: {
        stock: true,
        price: true,
        productId: true,
      },
    });

    return c.jsonT(
      AppResponse.success({
        id: order.id,
        shop: order.shop,
        approved: order.approved,
        orderAt: order.orderAt.toISOString(),
        totalPrice: order.items.reduce(
          (curr, order) =>
            order.quantity * (handlingProducts.find((v) => v.productId === order.productId)?.price ?? 0) + curr,
          0,
        ),
        items: order.items.map((item) => ({
          product: item.product,
          stock: handlingProducts.find((v) => v.productId === item.productId)?.stock,
          price: handlingProducts.find((v) => v.productId === item.productId)?.price,
          quantity: item.quantity,
        })),
      }),
    );
  },
);

export default app;
