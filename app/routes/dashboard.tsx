import { MetaFunction } from '@remix-run/cloudflare';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => [{ title: 'Dashboard - Blossom AI' }];

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1 text-bolt-elements-textPrimary">
      <Header />
      <main className="flex-1 p-8 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Overview of your projects.</p>
      </main>
    </div>
  );
}
