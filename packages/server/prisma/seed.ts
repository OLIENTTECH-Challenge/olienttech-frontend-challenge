import { products } from './data/products.js';
import { manufacturers } from './data/manufacturers.js';
import { shops } from './data/shops.js';
import { PrismaClient } from '../src/__generated__/prisma-client-js/index.js';

const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const prisma = new PrismaClient();
async function main() {
  // 商品カテゴリマスタ
  const productCategories = Array.from(new Set(products.flatMap((p) => p.categories))).map((v) => ({ name: v }));
  const _productCategories = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        productCategories.map(
          async ({ ...v }) =>
            await tx.productCategory.create({
              data: v,
            }),
        ),
      ),
  );

  // 商品マスタ
  const _products = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        products.map(async ({ categories, ...v }) => {
          const categoryIds = categories
            .map((c) => _productCategories.find((_c) => _c.name === c)?.id ?? null)
            .filter(nonNullable);

          const product = await tx.product.create({
            data: {
              ...v,
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
  const _manufacturers = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        manufacturers.map(
          async ({ ...v }) =>
            await tx.manufacturer.create({
              data: {
                ...v,
                handlingProducts: {
                  // NOTE: 仮で全商品を登録
                  create: _products.map(({ id }) => ({
                    productId: id,
                    price: getRandomInt(10, 10000),
                    stock: getRandomInt(0, 100),
                  })),
                },
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
          async ({ ...v }) =>
            await tx.shop.create({
              data: {
                ...v,
                partnerManufacturers: {
                  // NOTE: 仮で全メーカーを登録
                  create: _manufacturers.map(({ id }) => ({
                    manufacturerId: id,
                  })),
                },
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
