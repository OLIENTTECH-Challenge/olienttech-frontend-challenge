import { defineProductCategoryFactory, defineProductFactory, initialize } from '@/__generated__/fabbrica';
import { prisma } from '@/libs/prisma';
import { cleanupTestDB } from '@/libs/utils/prisma';
import { beforeEach, describe, expect, test } from '@jest/globals';
import app from '..';
import { isErrorResponse, isSuccessResponse } from '@olienttech/model';

beforeEach(async () => {
  initialize({ prisma });

  await cleanupTestDB();
});

describe('GET: /products', () => {
  const ProductFactory = defineProductFactory();

  test('正常系', async () => {
    await ProductFactory.createList(3);

    const res = await app.request('/', {
      method: 'GET',
      headers: {
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

describe('GET: /products/categories', () => {
  const ProductCategoryFactory = defineProductCategoryFactory();

  test('正常系', async () => {
    await ProductCategoryFactory.createList(3);

    const res = await app.request('/categories', {
      method: 'GET',
      headers: {
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
