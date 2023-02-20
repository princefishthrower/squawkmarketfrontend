export const uniqueByKey = <T>(arr: T[], key: keyof T): T[] => {
  const uniqueValues = new Set();
  const result: T[] = [];

  for (const item of arr) {
    const value = item[key];
    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      result.push(item);
    }
  }

  return result;
};
