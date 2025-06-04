import { json, type ActionFunction, type MetaFunction } from '@remix-run/cloudflare';
import { Form, useActionData } from '@remix-run/react';
import { useEffect } from 'react';
import { updateProfile } from '~/lib/stores/profile';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';

export const meta: MetaFunction = () => [{ title: 'Login - Blossom AI' }];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  if (typeof username === 'string' && username.trim() !== '') {
    return json({ username });
  }
  return json({});
};

export default function Login() {
  const data = useActionData<typeof action>();

  useEffect(() => {
    if (data?.username) {
      updateProfile({ username: data.username });
      window.location.href = '/';
    }
  }, [data]);

  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <Header />
      <div className="flex-1 flex items-center justify-center p-6">
        <Form method="post" className="space-y-4 bg-white dark:bg-gray-950 p-6 rounded-lg shadow">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Login</h1>
          <input
            name="username"
            className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded px-3 py-2 text-gray-900 dark:text-gray-100 w-64"
            placeholder="Username"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
