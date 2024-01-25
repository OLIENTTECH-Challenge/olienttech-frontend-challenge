export const safeParseInt = (value: string | undefined | null): number | undefined => {
  const parsed = parseInt(value ?? '', 10);
  if (!isNaN(parsed)) {
    return parsed;
  }
};
