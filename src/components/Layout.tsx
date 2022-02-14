import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { ReactNode } from 'react';
import { Header } from '~/components/Header';
const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
});

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

export const Layout = ({
  children,
  title = 'Take It Easy!',
  description = "HARUTA's Blog",
  image = 'https://haruta-blog.vercel.app/default.png',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={`${description}`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@haruta_8_' />
      <meta name='twitter:creator' content='@haruta_8_' />
      <meta name='twitter:image' content={image} />
      <meta property='og:url' content='https://haruta-blog.vercel.app/' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='flex flex-col px-4 mx-auto w-full bg-gray-100 sm:w-1/2 support-ios'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  </>
);
