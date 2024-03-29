import util from 'node:util';
import 'ts-node/register';

const setup = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const exec = util.promisify(require('node:child_process').exec);
  await exec(
    `DATABASE_URL='${process.env.DATABASE_URL}' pnpm -F @olienttech/database prisma migrate reset --force --skip-seed`,
  );

  console.log('Successfully reset the test database!');
};

export default setup;
