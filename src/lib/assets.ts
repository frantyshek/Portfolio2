/**
 * Utility function to get the correct asset path for GitHub Pages deployment
 * @param path - The path to the asset (e.g., '/lovable-uploads/image.png')
 * @returns The correct path including base path if needed
 */
export const getAssetPath = (path: string): string => {
  // If we're in production and have a base path, prepend it
  const basePath = import.meta.env.BASE_URL;
  if (path.startsWith('/')) {
    return basePath + path.slice(1);
  }
  return basePath + path;
};