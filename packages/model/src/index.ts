export * from './result';

export const Role = {
  Admin: 'admin',
  Manufacturer: 'manufacturer',
  Shop: 'shop',
} as const;
export type Role = (typeof Role)[keyof typeof Role];
