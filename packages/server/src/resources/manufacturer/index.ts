import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { AppResponse, Manufacturer, ManufacturerHandlingProduct } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { HTTPException } from 'hono/http-exception';
import { Role, verify } from '@/libs/utils/jwt';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';

const app = new OpenAPIHono();

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

/**
 * 製造会社情報を取得するミドルウェア
 */
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

app.openapi(
  createRoute({
    method: 'get',
    description: '製造会社情報を取得する',
    path: '/{manufacturerId}',
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
