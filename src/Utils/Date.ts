export const covertISOtoKST = (date: string) => {
  const newDate = date.substring(0, 10)
  return newDate
}

export const convertKSTtoUTC = (date: Date): string => {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return utcDate.toISOString().split('T')[0];
};