export const pickRandomStringFromArrayString = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
}
