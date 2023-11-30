import { JWT_SECRET } from '@/libs/constants/env';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

const app = new Hono();

app.get('/token', async (c) => {
  const payload = {
    sub: 'user123',
    role: 'admin',
    message: 'Hello Hono!',
  };
  const token = await sign(payload, JWT_SECRET);
  return c.text(token);
});

export default app;
