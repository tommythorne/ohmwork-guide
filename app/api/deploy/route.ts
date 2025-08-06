// app/api/deploy/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
 
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (!secret) {
  return NextResponse.json({ message: 'Missing secret' }, { status: 400 });
}

if (secret !== "c893d22e-c86c-4b01-9c36-d96011f9f36f") {
  return NextResponse.json({ message: 'Invalid secret', received: secret }, { status: 401 });
}


  const res = await fetch('https://api.github.com/repos/tommythorne/ohmwork-guide/dispatches', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      event_type: 'trigger-deploy',
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: 'Failed to trigger deploy' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Deploy triggered successfully' });
}
