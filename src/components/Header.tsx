import Image from 'next/image';
import Link from 'next/link';
import type { VFC } from 'react';

export const Header: VFC = () => {
  return (
    <header className='flex justify-between items-center py-8 bg-gray-100'>
      <h1 className='font-header text-3xl font-bold'>
        <Link href='/'>Take It Easy!</Link>
      </h1>
      <a href='https://twitter.com/haruta_8_' target='_blank' rel='noopener noreferrer'>
        <Image src='/haruta.png' alt='haruta-image' width='72' height='72' quality='10' />
      </a>
    </header>
  );
};
