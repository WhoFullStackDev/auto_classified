export const truncateText = (str: string) => {
  if (str.length < 18) {
    return str;
  }
  return str.substring(0, 18) + "...";
};
