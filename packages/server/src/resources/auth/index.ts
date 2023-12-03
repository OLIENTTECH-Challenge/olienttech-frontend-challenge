import { sign } from '@/libs/utils/jwt';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { prisma } from '@/libs/prisma';
import { AppResponse } from '@olienttech/model';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

const postManufacturerTokenBodySchema = z.object({
  id: z.number(),
});

app.post('/token/manufacturer', zValidator('json', postManufacturerTokenBodySchema), async (c) => {
  const { id } = c.req.valid('json');

  const manufacturer = await prisma.manufacturer.findUnique({
    where: { id },
  });

  if (!manufacturer) {
    throw new HTTPException(404, AppResponse.failure('Not found'));
  }

  const token = await sign({
    id: manufacturer.id,
    role: 'manufacturer',
  });
  return c.json(AppResponse.success(token));
});

export default app;
