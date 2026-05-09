/** Production site origin for canonical URLs, Open Graph, and JSON-LD. */
export const SITE_ORIGIN = 'https://perdeusta.com' as const

/** Absolute page URL (path from router match pathname, including leading slash). */
export function absoluteSiteUrl(pathname: string): string {
  const path =
    pathname === '' || pathname === '/'
      ? '/'
      : pathname.startsWith('/')
        ? pathname
        : `/${pathname}`
  if (path === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${path}`
}
