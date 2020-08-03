export const dateStringToDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('/').map((value: string): number => parseInt(value));
  return new Date(year, month - 1, day);
};
