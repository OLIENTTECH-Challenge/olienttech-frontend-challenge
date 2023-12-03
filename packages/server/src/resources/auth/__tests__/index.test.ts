import { beforeEach, describe, expect, test } from '@jest/globals';
import app from '..';
import { verify } from '@/libs/utils/jwt';
import { isErrorResponse, isSuccessResponse } from '@olienttech/model';
import { prisma } from '@/libs/prisma';
import { cleanupTestDB } from '@/libs/utils/prisma';
import { defineManufacturerFactory, initialize } from '@/__generated__/fabbrica';

beforeEach(async () => {
  initialize({ prisma });
  await cleanupTestDB();
});

describe('GET: /auth/token/manufacturer', () => {
  test('製造会社のアクセストークンを発行する', async () => {
    const ManufacturerFactory = defineManufacturerFactory();
    const manufacturer = await ManufacturerFactory.create();

    const res = await app.request('/token/manufacturer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: manufacturer.id,
      }),
    });
    const json = await res.json();

    if (!isSuccessResponse(json)) {
      expect(true).toBe(false);
    }

    if (isSuccessResponse<string>(json)) {
      const token = json.data;
      const decodedPayload = await verify(token);
      expect(res.status).toBe(200);
      expect(decodedPayload).toEqual({
        id: manufacturer.id,
        role: 'manufacturer',
      });
    }
  });

  test('存在しないIDを指定したときに404エラーが出る', async () => {
    const res = await app.request('/token/manufacturer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
      }),
    });
    const json = await res.json();

    if (!isErrorResponse(json)) {
      expect(true).toBe(false);
    }

    if (isErrorResponse(json)) {
      expect(res.status).toBe(404);
      expect(json.message).toEqual('Not Found');
    }
  });
});
