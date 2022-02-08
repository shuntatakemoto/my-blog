import type { ReactNode, VFC } from 'react';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <div className='flex flex-col mx-auto w-full min-h-screen bg-gray-100 sm:w-1/2'>
    <Header />
    <main className=''>{children}</main>
    <Footer />
  </div>
);
