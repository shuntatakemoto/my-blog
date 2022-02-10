import { IconGitHub, IconTwitter, IconLink } from '@supabase/ui';
import type { VFC } from 'react';

export const Footer: VFC = () => {
  return (
    <footer className='pt-24 mt-auto mb-4 text-center bg-gray-100'>
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
