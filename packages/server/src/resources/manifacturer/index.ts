import { Hono } from 'hono';

const app = new Hono();
app.get('/', async (c) => {
  return c.text('Hello Manifacturer!');
});

export default app;
