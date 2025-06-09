/**
 * Utility function to get the correct asset path with base path
 * @param path - The relative path to the asset
 * @returns The full path with base path included
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''; // Restore prefixing logic
  return `${basePath}${path}`;
} 