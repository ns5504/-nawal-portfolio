export function createPageUrl(name) {
  if (!name) return '/';
  // Simple mapping: page names map directly to routes
  return `/${name}`;
}

