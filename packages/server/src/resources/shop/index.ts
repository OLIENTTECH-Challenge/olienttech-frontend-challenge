import { Shop } from '@olienttech/model';
import { Hono } from 'hono';

const app = new Hono();

const dummyShops: Shop[] = [
  {
    id: '1',
    name: 'XXX薬局',
  },
  {
    id: '2',
    name: 'YYY薬局',
  },
];

app.get('/', async (c) => {
  return c.json({ data: dummyShops });
});

app.get('/:shopId', async (c) => {
  return c.json({ data: dummyShops[0] });
});

export default app;
