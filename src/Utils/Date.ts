export const covertISOtoKST = (date: string) => {
  const newDate = date.substring(0, 10)
  return newDate
}

export const convertKSTtoUTC = (date: Date): string => {
  const utcYear = date.getUTCFullYear();
  const utcMonth = String(date.getUTCMonth() + 1).padStart(2, '0');
  const utcDate = String(date.getUTCDate()).padStart(2, '0');
  const utcHours = String(date.getUTCHours()).padStart(2, '0');
  const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
  const utcSeconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${utcYear}-${utcMonth}-${utcDate}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;
}