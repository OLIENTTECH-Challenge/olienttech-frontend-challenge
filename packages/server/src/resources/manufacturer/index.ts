import { Hono } from 'hono';
import { Manufacturer, Product } from '@olienttech/model';
import { AppResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';

const app = new Hono();

const dummyManufacturers: Manufacturer[] = [
  {
    id: '1',
    name: 'XXX製薬',
  },
  {
    id: '2',
    name: 'YYY製薬',
  },
];

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'アレジオン',
    description: 'XXX製薬の商品です',
    categories: ['薬品'],
    image: 'https://example.com/xxx.png',
  },
  {
    id: '2',
    name: 'アレグラ',
    description: 'YYY製薬の商品です',
    categories: ['薬品'],
    image: 'https://example.com/yyy.png',
  },
];

app.get('/', async (c) => {
  const products = await prisma.product.findMany();
  return c.json(AppResponse.success(products));
});

app.get('/:manufacturerId', async (c) => {
  return c.json(AppResponse.success(dummyManufacturers[0]));
});

app.get('/:manufacturerId/products', async (c) => {
  return c.json(AppResponse.success(dummyProducts));
});

app.get('/:manufacturerId/products/:productId', async (c) => {
  return c.json(AppResponse.success(dummyProducts[0]));
});

export default app;
