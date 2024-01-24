export const getStringInitials = (str: string): string =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
