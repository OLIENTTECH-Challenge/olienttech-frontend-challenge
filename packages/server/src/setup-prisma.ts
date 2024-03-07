import { initialize } from '@olienttech/database';
import { prisma } from './libs/prisma';

jestPrisma.initializeClient(prisma);

beforeEach(async () => {
  initialize({ prisma: jestPrisma.client });
});
