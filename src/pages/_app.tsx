import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '~/styles/global.css';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { GA_TRACKING_ID, pageview } from '~/libs/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
