import { Role, sign } from '@/libs/utils/jwt';
import { Hono } from 'hono';

const app = new Hono();

app.get('/token', async (c) => {
  const token = await sign({
    id: 'user123',
    role: Role.Admin,
  });
  return c.text(token);
});

export default app;
