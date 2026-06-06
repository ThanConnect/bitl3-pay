export function validateApiKey(value?: string): boolean {
  if (!value) return false;
  return value.startsWith('bitl3_');
}
