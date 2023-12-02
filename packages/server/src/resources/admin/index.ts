import { sign } from '@/libs/utils/jwt';
import { Hono } from 'hono';

const app = new Hono();

app.get('/token', async (c) => {
  const token = await sign({
    sub: 'user123',
    role: 'admin',
  });
  return c.text(token);
});

export default app;
