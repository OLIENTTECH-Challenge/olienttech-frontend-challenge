import type { JestPrisma } from '@quramy/jest-prisma-core';
import type { prisma } from '../libs/prisma';

declare global {
  var jestPrisma: JestPrisma<typeof prisma>;
}
