import { createRoute, z } from '@hono/zod-openapi';
import { AppResponse, ManufacturerHandlingProduct } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';
import { Role, sign, verify } from '@/libs/utils/jwt';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';
import { createHonoApp } from '@/libs/hono';

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

    const manufacturerOnPrisma = await prisma.manufacturer.findUnique({
      where: { id },
    });
    if (manufacturerOnPrisma === null) {
      throw new HTTPException(404, AppResponse.failure('Not found'));
    }

    // NOTE: 一旦パスワードは固定
    if (password !== 'hoge') {
      throw new HTTPException(401, AppResponse.failure('Unauthorized'));
    }

    const token = await sign({
      id,
      role: Role.Manufacturer,
    });

    return c.jsonT(AppResponse.success({ token }));
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
    return c.json(AppResponse.failure('Unauthorized'), 401);
  }

  const payload = await verify(token);

  // 適切なロールでないとき
  if (payload.role !== Role.Manufacturer) {
    return c.json(AppResponse.failure('Unauthorized'), 401);
  }

  // 自分のIDでないとき
  if (payload.id !== manufacturerId) {
    return c.json(AppResponse.failure('Unauthorized'), 401);
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
    const { manufacturerId } = c.req.valid('param');

    const manufacturerOnPrisma = await prisma.manufacturer.findUnique({
      where: { id: manufacturerId },
    });

    if (!manufacturerOnPrisma) {
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    return c.jsonT(
      AppResponse.success({
        id: manufacturerOnPrisma.id,
        name: manufacturerOnPrisma.name,
        description: manufacturerOnPrisma.description,
      }),
    );
  },
);

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社情報を取得する',
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
                  id: z.number(),
                  stock: z.number(),
                  product: z.object({
                    id: z.string(),
                    name: z.string(),
                    description: z.string(),
                    categories: z.array(
                      z.object({
                        id: z.string(),
                        name: z.string(),
                      }),
                    ),
                    image: z.string(),
                  }),
                }),
              ),
            ),
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
      return c.jsonT(AppResponse.failure('Not found'), 404);
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
      return c.jsonT(AppResponse.failure('Not found'), 404);
    }

    return c.jsonT(AppResponse.success(manufacturerHandlingProduct));
  },
);

app.openapi(
  createRoute({
    method: 'post',
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

export default app;
