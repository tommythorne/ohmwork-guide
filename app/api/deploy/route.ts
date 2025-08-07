import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (!secret || secret !== process.env.DEPLOY_SECRET) {
    return NextResponse.json({ message: 'Invalid secret', received: secret }, { status: 401 });
  }

  const githubRes = await fetch('https://api.github.com/repos/tommythorne/ohmwork-guide/dispatches', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ event_type: 'trigger-deploy' }),
  });

  if (!githubRes.ok) {
    const error = await githubRes.text();
    return NextResponse.json({ message: 'GitHub API error', error }, { status: 500 });
  }

  return NextResponse.json({ message: 'Deploy triggered' });
}
