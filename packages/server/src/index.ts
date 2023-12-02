import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import adminRoute from './resources/admin';
import manufacturerRoute from './resources/manufacturer';
import shopRoute from './resources/shop';
import productRoute from './resources/product';
import { JWT_SECRET } from './libs/constants/env';

const app = new Hono();
app.get('/', async (c) => {
  return c.text('Hello Hono!');
});

const privateRoute = new Hono();
privateRoute.use(
  '*',
  jwt({
    secret: JWT_SECRET,
  }),
);

// 管理者
app.route('/admin', adminRoute);

// 販売会社
// privateRoute.route('/shops', shopRoute);
app.route('/shops', shopRoute);

// 製薬会社
// privateRoute.route('/manufacturers', manufacturerRoute);
app.route('/manufacturers', manufacturerRoute);

// 商品
app.route('/products', productRoute);

app.route('/', privateRoute);

serve({
  ...app,
  port: 8787,
});
