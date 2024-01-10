import { AppResponse, ProductCategory } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { SuccessResponseSchema } from '@/libs/utils/schema';

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      return c.json(AppResponse.failure(result.error.message), 422);
    }
  },
});

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
                  image: z.string(),
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
      // NOTE: 仮で画像を設定
      image: 'https://github.com/Alesion30',
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
    },
  }),
  async (c) => {
    const categoriesOnPrisma = await prisma.productCategory.findMany();

    const categories: ProductCategory[] = categoriesOnPrisma.map((category) => ({
      id: category.id,
      name: category.name,
    }));

    return c.jsonT(AppResponse.success(categories));
  },
);

export default app;
