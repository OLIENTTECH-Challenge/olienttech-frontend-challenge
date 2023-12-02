import { Hono } from 'hono';
import { AppResponse, Product, ProductCategory } from '@olienttech/model';
import { prisma } from '@/libs/prisma';

const app = new Hono();

app.get('/', async (c) => {
  const productsOnPrisma = await prisma.product.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const products: Product[] = productsOnPrisma.map((product) => ({
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

  return c.json(AppResponse.success(products));
});

app.get('/all/categories', async (c) => {
  const categoriesOnPrisma = await prisma.productCategory.findMany();

  const categories: ProductCategory[] = categoriesOnPrisma.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  return c.json(AppResponse.success(categories));
});

export default app;
