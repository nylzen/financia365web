import {
  Banks,
  CTA,
  Hero,
  Instagram,
  Navbar,
  Services,
  Testimonials,
} from '@/components';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box bg='gray.100'>
        <Hero />
      </Box>
      <Services />
      <CTA />
      <Banks />
      <Testimonials />
      <Instagram />
    </>
  );
}
