import {
  Banks,
  CTA,
  Contact,
  Hero,
  Instagram,
  Services,
  Testimonials,
} from '@/components';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Financia365</title>
        <meta name='description' content='Financia365' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Box bg='gray.100'>
        <Hero />
      </Box>
      <Services />
      <CTA />
      <Banks />
      <Contact />
      <Testimonials />
      <Instagram />
    </>
  );
}
