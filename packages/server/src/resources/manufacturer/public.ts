import { prisma } from '@/libs/prisma';
import { Role, sign } from '@/libs/utils/jwt';
import { AppResponse } from '@olienttech/model';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

// 製造会社でログインする
app.post('/signin', async (c) => {
  const { id, password } = await c.req.json<{ id: string; password: string }>();

  const manufacturerOnPrisma = await prisma.manufacturer.findUnique({
    where: { id },
  });
  if (manufacturerOnPrisma === null) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  // NOTE: 一旦パスワードは固定
  if (password !== 'hoge') {
    throw new HTTPException(401, AppResponse.failure('Unauthorized'));
  }

  const token = await sign({
    id,
    role: Role.Manufacturer,
  });

  return c.json(AppResponse.success({ token }));
});

export default app;
