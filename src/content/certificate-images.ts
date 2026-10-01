// Certificate images live in src/content/certificates-images/. Set "image" in certificates.json to the file name
// (e.g. "KPM22.png"); Vite bundles the file and handles the site base path. Full URLs or "/..." paths also work.
const bundled = import.meta.glob('./certificates-images/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export function certificateImage(value: string): string | undefined {
  if (!value) return undefined;
  if (/^(https?:)?\/\//.test(value) || value.startsWith('/')) return value;
  return bundled[`./certificates-images/${value.replace(/^\.?\/?(certificates-images\/)?/, '')}`];
}
