import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import manifacturerRoute from './resources/manifacturer';
import shopRoute from './resources/shop';

const app = new Hono();
app.get('/', async (c) => {
  return c.text('Hello Hono!');
});

app.route('/shop', shopRoute);
app.route('/manufacturer', manifacturerRoute);

serve({
  ...app,
  port: 8787,
});
