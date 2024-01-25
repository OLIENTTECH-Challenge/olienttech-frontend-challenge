import { cleanupTestDB } from '@/libs/utils/prisma';
import { beforeEach, describe, test, expect } from '@jest/globals';
import app from '..';
import {
  initialize,
  defineManufacturerFactory,
  defineManufacturerHandlingProductsFactory,
  defineProductFactory,
  defineOrderFactory,
  defineShopFactory,
} from '@/__generated__/fabbrica';
import { Role, isErrorResponse, isSuccessResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { sign } from '@/libs/utils/jwt';

beforeEach(async () => {
  initialize({ prisma });

  await cleanupTestDB();
});

describe('POST: /manufacturers/signin', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturer = await ManufacturerFactory.create();

    const payload = {
      id: manufacturer.id,
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
      expect(json.data).toHaveProperty('id');
      expect(json.data).toHaveProperty('name');
      expect(json.data).toHaveProperty('token');
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });

  test('異常系: パスワードが違うとき', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturer = await ManufacturerFactory.create();

    const payload = {
      id: manufacturer.id,
      password: 'fugo', // NOTE: パスワードはhogeが正しい
    };

    const res = await app.request('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await res.json();

    if (isErrorResponse(json)) {
      expect(res.status).toBe(401);
    } else {
      expect(true).toBe(false);
    }
  });

  test('異常系: メーカーが存在しないとき', async () => {
    const payload = {
      id: 'hoge',
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

    if (isErrorResponse(json)) {
      expect(res.status).toBe(404);
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('GET: /manufacturers/:manufacturerId', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturer = await ManufacturerFactory.create();

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturer.id}`, {
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

  test('異常系: メーカーが存在しないとき', async () => {
    const manufacturerId = 'hoge';
    const token = await sign({
      id: manufacturerId,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturerId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    if (isErrorResponse(json)) {
      expect(res.status).toBe(404);
    } else {
      expect(true).toBe(false);
    }
  });

  test('異常系: トークンがセットされていないとき', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturer = await ManufacturerFactory.create();

    const res = await app.request(`/${manufacturer.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    if (isErrorResponse(json)) {
      expect(res.status).toBe(401);
    } else {
      expect(true).toBe(false);
    }
  });

  test('異常系: 自分の製造会社以外にアクセスしようとするとき', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturers = await ManufacturerFactory.createList(2);
    const myManufacturer = manufacturers[0];
    const otherManufacturer = manufacturers[1];

    const token = await sign({
      id: myManufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${otherManufacturer.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();
    if (isErrorResponse(json)) {
      expect(res.status).toBe(401);
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('GET: /manufacturers/:manufacturerId/handling-products', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const ProductFactory = defineProductFactory();
    const ManufacturerHandlingProductsFactory = defineManufacturerHandlingProductsFactory({
      defaultData: { manufacturer: ManufacturerFactory, product: ProductFactory },
    });

    const manufacturer = await ManufacturerFactory.create();

    const manufacturerHandlingProducts = await ManufacturerHandlingProductsFactory.createList(
      new Array(3).fill(0).map(() => ({
        manufacturer: {
          connect: {
            id: manufacturer.id,
          },
        },
      })),
    );

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturer.id}/handling-products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveLength(manufacturerHandlingProducts.length);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('GET: /manufacturers/:manufacturerId/handling-products/:productId', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const ProductFactory = defineProductFactory();
    const ManufacturerHandlingProductsFactory = defineManufacturerHandlingProductsFactory({
      defaultData: { manufacturer: ManufacturerFactory, product: ProductFactory },
    });

    const manufacturer = await ManufacturerFactory.create();

    const manufacturerHandlingProducts = await ManufacturerHandlingProductsFactory.createList(
      new Array(3).fill(0).map(() => ({
        manufacturer: {
          connect: {
            id: manufacturer.id,
          },
        },
      })),
    );
    const manufacturerHandlingProduct = manufacturerHandlingProducts[0];

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturer.id}/handling-products/${manufacturerHandlingProduct.productId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});

describe('PUT: /manufacturers/:manufacturerId/handling-products', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const ProductFactory = defineProductFactory();
    const ManufacturerHandlingProductsFactory = defineManufacturerHandlingProductsFactory({
      defaultData: { manufacturer: ManufacturerFactory, product: ProductFactory },
    });

    const manufacturer = await ManufacturerFactory.create();

    const manufacturerHandlingProducts = await ManufacturerHandlingProductsFactory.createList(
      new Array(3).fill(0).map(() => ({
        manufacturer: {
          connect: {
            id: manufacturer.id,
          },
        },
      })),
    );
    const manufacturerHandlingProduct = manufacturerHandlingProducts[0];

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(
      `/${manufacturer.id}/handling-products/${manufacturerHandlingProduct.productId}/stock`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stock: 10000,
        }),
      },
    );

    expect(res.status).toBe(200);

    const newManufacturerHandlingProduct = await prisma.manufacturerHandlingProducts.findFirst({
      where: {
        manufacturerId: manufacturer.id,
        productId: manufacturerHandlingProduct.productId,
      },
    });
    expect(newManufacturerHandlingProduct?.stock).toBe(10000);
  });
});

describe('GET: /manufacturers/:manufacturerId/orders', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const ShopFactory = defineShopFactory();
    const OrderFactory = defineOrderFactory({
      defaultData: {
        shop: ShopFactory,
        manufacturer: ManufacturerFactory,
      },
    });

    const manufacturer = await ManufacturerFactory.create();

    await OrderFactory.create({
      manufacturer: {
        connect: {
          id: manufacturer.id,
        },
      },
    });

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturer.id}/orders`, {
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

describe('GET: /manufacturers/:manufacturerId/orders/:orderId', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const ShopFactory = defineShopFactory();
    const OrderFactory = defineOrderFactory({
      defaultData: {
        shop: ShopFactory,
        manufacturer: ManufacturerFactory,
      },
    });

    const manufacturer = await ManufacturerFactory.create();

    const order = await OrderFactory.create({
      manufacturer: {
        connect: {
          id: manufacturer.id,
        },
      },
    });

    const token = await sign({
      id: manufacturer.id,
      role: Role.Manufacturer,
    });

    const res = await app.request(`/${manufacturer.id}/orders/${order.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
    } else {
      if (isErrorResponse(json)) {
        console.error(json.message);
      }
      expect(true).toBe(false);
    }
  });
});
