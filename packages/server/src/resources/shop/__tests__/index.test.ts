import { sign } from '@/libs/utils/jwt';
import { describe, expect, test } from '@jest/globals';
import { defineManufacturerFactory, defineProductFactory, defineShopFactory } from '@olienttech/database';
import { Role, isErrorResponse, isSuccessResponse } from '@olienttech/model';
import app from '..';

jest.mock('@/libs/prisma.ts', () => {
  return {
    prisma: jestPrisma.client,
  };
});

describe('POST: /signin', () => {
  const ShopFactory = defineShopFactory();

  test('正常系', async () => {
    const shop = await ShopFactory.create();

    const payload = {
      id: shop.id,
      password: 'hoge',
    };

    const res = await app.request('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveProperty('token');
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('GET /:shopId', () => {
  const ShopFactory = defineShopFactory();

  test('正常系', async () => {
    const shop = await ShopFactory.create();

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const res = await app.request(`/${shop.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveProperty('id');
      expect(json.data).toHaveProperty('name');
      expect(json.data).toHaveProperty('description');
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('GET /:shopId/partner-manufacturers', () => {
  const ShopFactory = defineShopFactory();

  test('正常系', async () => {
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: new Array(3).fill(0).map(() => ({
          manufacturer: {
            create: {
              name: 'hoge',
              description: 'hoge',
            },
          },
        })),
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const res = await app.request(`/${shop.id}/partner-manufacturers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveLength(3);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('GET /:shopId/partner-manufacturers/:manufacturerId/products', () => {
  const ShopFactory = defineShopFactory();
  const ManufacturerFactory = defineManufacturerFactory();
  const ProductFactory = defineProductFactory();

  test('正常系', async () => {
    const products = await ProductFactory.createList(3);

    const manufacturers = await ManufacturerFactory.createList([
      {
        handlingProducts: {
          create: products.map((product) => ({
            price: 100,
            stock: 100,
            product: {
              connect: {
                id: product.id,
              },
            },
          })),
        },
      },
    ]);

    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: manufacturers.map((manufacturer) => ({
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        })),
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const res = await app.request(`/${shop.id}/partner-manufacturers/${manufacturers[0].id}/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(json.data.products).toHaveLength(3);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('GET /:shopId/orders', () => {
  const ShopFactory = defineShopFactory();
  const ManufacturerFactory = defineManufacturerFactory();

  test('正常系', async () => {
    const manufacturers = await ManufacturerFactory.createList(3);

    const shop = await ShopFactory.create({
      orders: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturers[0].id,
            },
          },
        },
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveLength(1);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('/:shopId/orders', () => {
  const ShopFactory = defineShopFactory();
  const ManufacturerFactory = defineManufacturerFactory();
  const ProductFactory = defineProductFactory();

  test('正常系', async () => {
    const products = await ProductFactory.createList(3);
    const manufacturer = await ManufacturerFactory.create({
      handlingProducts: {
        create: products.map((product) => ({
          price: 100,
          stock: 100,
          product: {
            connect: {
              id: product.id,
            },
          },
        })),
      },
    });
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        },
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [
        {
          productId: products[0].id,
          quantity: 1,
        },
        {
          productId: products[1].id,
          quantity: 2,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(200);
  });

  test('異常系: 個数に0以下を指定している場合', async () => {
    const manufacturer = await ManufacturerFactory.create();
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        },
      },
    });
    const products = await ProductFactory.createList(3);

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [
        {
          productId: products[0].id,
          quantity: 0,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(422);
  });

  test('異常系: 注文商品がないとき', async () => {
    const manufacturer = await ManufacturerFactory.create();
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        },
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(422);
  });

  test('異常系: 存在しない製造会社を指定するとき', async () => {
    const shop = await ShopFactory.create();

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });
    const product = await ProductFactory.create();

    const payload = {
      manufacturerId: 'hoge', // NOTE: 存在しない製造会社のID
      items: [
        {
          productId: product.id,
          quantity: 0,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(403);
  });

  test('異常系: パートナーではない製造会社を指定するとき', async () => {
    const manufacturer = await ManufacturerFactory.create();
    const shop = await ShopFactory.create();
    const products = await ProductFactory.createList(3);

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [
        {
          productId: products[0].id,
          quantity: 1,
        },
        {
          productId: products[1].id,
          quantity: 2,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(403);
  });

  test('異常系: 取り扱い商品ではないとき', async () => {
    const manufacturer = await ManufacturerFactory.create();
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        },
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [
        {
          productId: 'hoge', // NOTE: 存在しない商品のID
          quantity: 0,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(422);
  });

  test('異常系: 在庫が足りないとき', async () => {
    const product = await ProductFactory.create();
    const manufacturer = await ManufacturerFactory.create({
      handlingProducts: {
        create: {
          price: 100,
          stock: 0,
          product: {
            connect: {
              id: product.id,
            },
          },
        },
      },
    });
    const shop = await ShopFactory.create({
      partnerManufacturers: {
        create: {
          manufacturer: {
            connect: {
              id: manufacturer.id,
            },
          },
        },
      },
    });

    const token = await sign({
      id: shop.id,
      role: Role.Shop,
    });

    const payload = {
      manufacturerId: manufacturer.id,
      items: [
        {
          productId: product.id,
          quantity: 1000,
        },
      ],
    };

    const res = await app.request(`/${shop.id}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(res.status).toBe(422);
  });
});
