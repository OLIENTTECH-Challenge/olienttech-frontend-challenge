import {
  initialize,
  defineShopFactory,
  defineManufacturerFactory,
  defineProductFactory,
} from '@/__generated__/fabbrica';
import { prisma } from '@/libs/prisma';
import { cleanupTestDB } from '@/libs/utils/prisma';
import { beforeEach, describe, expect, test } from '@jest/globals';
import app from '..';
import { Role, isErrorResponse, isSuccessResponse } from '@olienttech/model';
import { sign } from '@/libs/utils/jwt';

beforeEach(async () => {
  initialize({ prisma });

  await cleanupTestDB();
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

    expect(res.status).toBe(500);
  });
});
