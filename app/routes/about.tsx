import { MetaFunction } from '@remix-run/cloudflare';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => [{ title: 'About - Blossom AI' }];

export default function About() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1 text-bolt-elements-textPrimary">
      <Header />
      <main className="flex-1 p-8 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">About Blossom AI</h1>
        <p>Blossom AI helps you generate full-stack projects with minimal effort.</p>
      </main>
    </div>
  );
}
