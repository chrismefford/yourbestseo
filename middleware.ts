import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  const bots = [
    'googlebot',
    'bingbot',
    'yandex',
    'duckduckbot',
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot'
  ]

  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot))

  if (isBot) {
    const prerenderUrl = 'https://service.prerender.io/' + request.url
    const response = NextResponse.rewrite(prerenderUrl)
    response.headers.set('X-Prerender-Token', 'zP7nDr6o13R0oS1Clyzi')
    return response
  }

  return NextResponse.next()
}
