import { AppResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { createRoute, z } from '@hono/zod-openapi';
import { ErrorResponseSchema, SuccessResponseSchema } from '@/libs/utils/schema';
import { createHonoApp } from '@/libs/hono';

const app = createHonoApp();

app.openapi(
  createRoute({
    method: 'get',
    path: '/',
    summary: '商品一覧を取得する',
    tags: ['product'],
    responses: {
      200: {
        description: '商品一覧を取得する',
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
    const productsOnPrisma = await prisma.product.findMany({
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    const products = productsOnPrisma.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      categories: product.categories.map(({ category }) => ({
        id: category.id,
        name: category.name,
      })),
    }));

    return c.jsonT(AppResponse.success(products));
  },
);

app.openapi(
  createRoute({
    method: 'get',
    path: '/categories',
    summary: '商品カテゴリ一覧を取得する',
    tags: ['product'],
    responses: {
      200: {
        description: '商品カテゴリ一覧を取得する',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
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
    const categoriesOnPrisma = await prisma.productCategory.findMany();

    const categories = categoriesOnPrisma.map((category) => ({
      id: category.id,
      name: category.name,
    }));

    return c.jsonT(AppResponse.success(categories));
  },
);

export default app;
