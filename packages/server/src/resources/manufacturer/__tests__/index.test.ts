import { cleanupTestDB } from '@/libs/utils/prisma';
import { beforeEach, describe, test, expect } from '@jest/globals';
import app from '..';
import { initialize, defineManufacturerFactory } from '@/__generated__/fabbrica';
import { isSuccessResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';

beforeEach(async () => {
  initialize({ prisma });

  await cleanupTestDB();
});

describe('GET: /manufacturers', () => {
  test('正常系', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    await ManufacturerFactory.createList(5);

    const res = await app.request('/');
    const json = await res.json();

    if (isSuccessResponse(json)) {
      expect(res.status).toBe(200);
      expect(json.data).toHaveLength(5);
    } else {
      expect(true).toBe(false);
    }
  });
});
