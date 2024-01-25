import { PrismaClient } from '@/__generated__/prisma-client-js';
import { pagination } from 'prisma-extension-pagination';

export const prisma = new PrismaClient().$extends(
  pagination({
    pages: {
      limit: 9999, // NOTE: 初期値は大きい値にする
      includePageCount: true,
    },
  }),
);
