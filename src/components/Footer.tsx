import { IconGitHub, IconTwitter, IconLink } from '@supabase/ui';
import type { VFC } from 'react';

const Footer: VFC = () => {
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight);

  // 初期化
  setFillHeight();
  return (
    <footer className='pt-24 mb-4 text-center bg-gray-100'>
      <div className='flex justify-between py-4 pb-8 mx-auto w-1/3'>
        <a href='https://github.com/shuntatakemoto' target='_blank' rel='noopener noreferrer'>
          <IconGitHub />
        </a>
        <a href='https://twitter.com/haruta_8_' target='_blank' rel='noopener noreferrer'>
          <IconTwitter />
        </a>
        <a href='https://www.haruta-8.dev/#/about' target='_blank' rel='noopener noreferrer'>
          <IconLink />
        </a>
      </div>

      <small>© 2022 HARUTA | This site uses Google Analytics.</small>
    </footer>
  );
};

export default Footer;
