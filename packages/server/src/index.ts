import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import manufacturerRoute from './resources/manufacturer';
import shopRoute from './resources/shop';

const app = new Hono();
app.get('/', async (c) => {
  return c.text('Hello Hono!');
});

app.route('/shops', shopRoute);
app.route('/manufacturers', manufacturerRoute);

serve({
  ...app,
  port: 8787,
});
