export const truncateText = (str: string, length: number) => {
  if (str.length < length) {
    return str;
  }
  return str.substring(0, length) + "...";
};
