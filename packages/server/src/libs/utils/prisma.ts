import util from 'util';
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
const exec = util.promisify(require('child_process').exec);

export const cleanupTestDB = async () => {
  await exec('pnpm run prisma:reset:test');
};
