import { MetaFunction } from '@remix-run/cloudflare';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => [{ title: 'Pricing - Blossom AI' }];

export default function Pricing() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1 text-bolt-elements-textPrimary">
      <Header />
      <main className="flex-1 p-8 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Pricing</h1>
        <p>Choose the plan that fits your needs.</p>
      </main>
    </div>
  );
}
