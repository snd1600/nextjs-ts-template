import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import Counter from '#components/counter';

export default function Index() {
  return (
    <>
      <Head>
        <title>Next.js ts template</title>
        <link rel="icon" href="/dev-icon.png" />
      </Head>
      <div className={twMerge('w-screen h-screen bg-black p-4')}>
        <div
          className={twMerge(
            'font-mono font-bold px-1',
            'text-3xl text-green-500'
          )}
        >
          Hello, World!
        </div>
        <Counter
          className={twMerge('font-mono font-bold', 'text-3xl text-green-500')}
          count={10}
        />
      </div>
    </>
  );
}
