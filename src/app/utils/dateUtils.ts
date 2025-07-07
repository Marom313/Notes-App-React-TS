// src/utils/dateUtils.ts
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}
