const pagePaths = new Set([
  '/',
  '/services',
  '/work',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/thanks',
]);

export function getLocalePaths(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const isEnglish = normalized === '/en' || normalized.startsWith('/en/');
  const spanishPath = isEnglish
    ? normalized.replace(/^\/en(?=\/|$)/, '') || '/'
    : normalized;
  const supportedPath = pagePaths.has(spanishPath) ? spanishPath : '/';
  const englishPath = supportedPath === '/' ? '/en' : `/en${supportedPath}`;

  return {
    language: isEnglish ? 'en' : 'es',
    spanishPath: supportedPath,
    englishPath,
    pathFor: (language) => language === 'en' ? englishPath : supportedPath,
  };
}
