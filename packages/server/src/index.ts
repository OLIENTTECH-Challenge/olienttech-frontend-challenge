import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import manufacturerRoute from './resources/manufacturer';
import shopRoute from './resources/shop';
import productRoute from './resources/product';
import { swaggerUI } from '@hono/swagger-ui';
import { createHonoApp } from './libs/hono';
import { createRoute, z } from '@hono/zod-openapi';
import { ErrorResponseSchema, SuccessResponseSchema } from './libs/utils/schema';
import { AppResponse, Role } from '@olienttech/model';
import { verify } from './libs/utils/jwt';
import { prisma } from './libs/prisma';

const app = createHonoApp();

app.use(
  '*',
  cors({
    origin: ['http://localhost:3000'],
  }),
);

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

app.openapi(
  createRoute({
    method: 'get',
    description: 'トークンを検証する',
    path: '/verify',
    security: [
      {
        Bearer: [],
      },
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: SuccessResponseSchema(
              z.object({
                id: z.string(),
                role: z.enum(['admin', 'manufacturer', 'shop']),
              }),
            ),
          },
        },
      },
      404: {
        description: 'Not found',
        content: {
          'application/json': {
            schema: ErrorResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const token = c.req.header('Authorization')?.replace('Bearer ', '');

    // トークンがセットされていないとき
    if (token === undefined) {
      return c.jsonT(AppResponse.failure('Unauthorized'), 401);
    }

    const payload = await verify(token);

    const { id, role } = payload;

    if (role === Role.Manufacturer) {
      const manufacturer = await prisma.manufacturer.findUnique({
        where: {
          id,
        },
      });
      if (manufacturer === null) {
        return c.jsonT(AppResponse.failure('Unauthorized'), 401);
      }
    }

    if (role === Role.Shop) {
      const shop = await prisma.shop.findUnique({
        where: {
          id,
        },
      });
      if (shop === null) {
        return c.jsonT(AppResponse.failure('Unauthorized'), 401);
      }
    }

    return c.jsonT(AppResponse.success({ id, role }));
  },
);

// const privateRoute = new Hono();
// privateRoute.use(
//   '*',
//   jwt({
//     secret: JWT_SECRET,
//   }),
// );

// 管理者
// app.route('/admin', adminRoute);

// 販売会社
app.route('/shops', shopRoute);

// 製薬会社
app.route('/manufacturers', manufacturerRoute);

// 商品
app.route('/products', productRoute);

// app.route('/', privateRoute);

serve({
  ...app,
  port: 8787,
});
