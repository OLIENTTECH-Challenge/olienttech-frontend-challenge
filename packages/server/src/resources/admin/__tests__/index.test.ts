import { describe, expect, test } from '@jest/globals';
import app from '..';
import { verify } from '@/libs/utils/jwt';

describe('API: /admin', () => {
  test('GET: /token', async () => {
    const res = await app.request('/token');
    const token = await res.text();

    const decodedPayload = await verify(token);

    expect(res.status).toBe(200);
    expect(decodedPayload).toEqual({
      sub: 'user123',
      role: 'admin',
    });
  });
});
