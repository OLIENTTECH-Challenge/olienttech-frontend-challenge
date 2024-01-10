import { describe, expect, test } from '@jest/globals';
import app from '..';
import { verify } from '@/libs/utils/jwt';

describe('GET: /admin/token', () => {
  test('正常系', async () => {
    const res = await app.request('/token');
    const token = await res.text();

    const decodedPayload = await verify(token);

    expect(res.status).toBe(200);
    expect(decodedPayload).toEqual({
      id: 'user123',
      role: 'admin',
    });
  });
});
