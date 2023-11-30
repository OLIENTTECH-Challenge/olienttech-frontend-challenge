import { Hono } from 'hono';

const app = new Hono();
app.get('/', async (c) => {
  return c.text('Hello Shop!');
});

export default app;
