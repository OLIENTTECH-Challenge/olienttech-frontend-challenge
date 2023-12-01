import { PrismaClient } from '@prisma/client';

const productCategories = [
  { name: '薬' },
  { name: '食品' },
  { name: '飲料水' },
  { name: '日用品' },
  { name: '防犯' },
  { name: 'オリジナルグッズ' },
];

const products = [
  { name: 'アレジオン', image: 'https://example.com', categories: ['薬', '食品'] },
  { name: 'アレグラ', image: 'https://example.com', categories: [] },
];

const manufacturers = [
  {
    name: 'マツモトキヨシ',
  },
  {
    name: 'ウエルシア',
  },
];

const shops = [
  {
    name: 'マツモトキヨシ',
  },
  {
    name: 'ウエルシア',
  },
];

const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;

const prisma = new PrismaClient();
async function main() {
  // 商品カテゴリマスタ
  const _productCategories = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        productCategories.map(
          async ({ name }) =>
            await tx.productCategory.create({
              data: {
                name,
              },
            }),
        ),
      ),
  );

  // 商品マスタ
  await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        products.map(async ({ name, image, categories }) => {
          const categoryIds = categories
            .map((c) => _productCategories.find((_c) => _c.name === c)?.id ?? null)
            .filter(nonNullable);

          const product = await tx.product.create({
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
            data: {
              name,
              image,
              categories: {
                create: categoryIds.map((id) => ({
                  categoryId: id,
                })),
              },
            },
          });

          return product;
        }),
      ),
  );

  // メーカーマスタ
  await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        manufacturers.map(
          async ({ name }) =>
            await tx.manufacturer.create({
              data: {
                name,
              },
            }),
        ),
      ),
  );

  // 店舗マスタ
  await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        shops.map(
          async ({ name }) =>
            await tx.shop.create({
              data: {
                name,
              },
            }),
        ),
      ),
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
