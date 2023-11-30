import { describe, expect, test } from '@jest/globals';
import app from '..';
import { verify } from 'hono/jwt';
import { JWT_SECRET } from '@/libs/constants/env';

describe('API: /admin', () => {
  test('GET: /token', async () => {
    const res = await app.request('/token');
    const token = await res.text();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const decodedPayload = await verify(token, JWT_SECRET);

    expect(res.status).toBe(200);
    expect(decodedPayload).toEqual({
      sub: 'user123',
      role: 'admin',
      message: 'Hello Hono!',
    });
  });
});
