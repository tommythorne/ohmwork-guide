// app/api/deploy/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.DEPLOY_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const res = await fetch('https://api.github.com/repos/tommythorne/ohmwork-guide/dispatches', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({ event_type: 'trigger-deploy' })
  });

  const resText = await res.text();

  if (!res.ok) {
    return NextResponse.json({ message: 'Failed to trigger deploy', status: res.status, body: resText }, { status: 500 });
  }

  return NextResponse.json({ message: 'Deploy triggered successfully' });
}


