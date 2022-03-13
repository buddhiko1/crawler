export function chunkArray<T>(array: Array<T>, size: number): Array<Array<T>> {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}
