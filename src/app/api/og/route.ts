import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { createElement as h } from 'react';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') || 'Agent Analytics';
  const description =
    searchParams.get('description') ||
    'AI consulting & systems design that work.';

  return new ImageResponse(
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          width: '100%',
          height: '100%',
          backgroundColor: '#1E2A78',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        },
      },
      [
        h('img', {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/agent-analytics-logo.png`,
          width: 120,
          height: 32,
          alt: 'Agent Analytics Logo',
          style: {
            position: 'absolute',
            top: 40,
            right: 40,
          },
        }),
        h('h1', { style: { fontSize: 64, fontWeight: 700 } }, title),
        h('p', { style: { fontSize: 28, marginTop: 20 } }, description),
      ]
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
