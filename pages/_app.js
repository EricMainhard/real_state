import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Layout } from '../components/Layout'
import { useRouter } from "next/router";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false });
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      NProgress.start();
    }

    const handleRouteChangeStop = (url) => {
      NProgress.done();
    }

    const handleRouteChangeError = (url) => {
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeStop);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeStop);
      router.events.off('routeChangeError', handleRouteChangeError);
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
