import type { MetaFunction } from '@remix-run/cloudflare';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';

export const meta: MetaFunction = () => [{ title: 'Pricing - Blossom AI' }];

export default function Pricing() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <Header />
      <div className="flex-1 flex items-center justify-center p-6">
        <p className="text-lg text-gray-900 dark:text-gray-100">Blossom AI is currently free while in early development.</p>
      </div>
    </div>
  );
}
