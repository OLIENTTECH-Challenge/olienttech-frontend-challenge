export const safeParseInt = (value: string | undefined | null): number | undefined => {
  const parsed = Number.parseInt(value ?? '', 10);
  if (!Number.isNaN(parsed)) {
    return parsed;
  }
};
