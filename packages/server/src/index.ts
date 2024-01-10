import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import adminRoute from './resources/admin';
import manufacturerRoute from './resources/manufacturer';
import manufacturerPublicRoute from './resources/manufacturer/public';
import shopRoute from './resources/shop';
import productRoute from './resources/product';
import { JWT_SECRET } from './libs/constants/env';
import { OpenAPIHono } from '@hono/zod-openapi';
import { AppResponse } from '@olienttech/model';
import { swaggerUI } from '@hono/swagger-ui';

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      return c.json(AppResponse.failure(result.error.message), 422);
    }
  },
});

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'OLIENTTECH フロントエンド採用課題',
  },
});
app.get('/swagger-ui', swaggerUI({ url: '/doc' }));

app.openAPIRegistry.registerComponent('securitySchemes', 'Bearer', {
  type: 'http',
  scheme: 'bearer',
});

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
app.route('/manufacturers', manufacturerRoute);
app.route('/manufacturers/public', manufacturerPublicRoute);

// 商品
app.route('/products', productRoute);

app.route('/', privateRoute);

serve({
  ...app,
  port: 8787,
});
