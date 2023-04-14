import {
  Banks,
  CTA,
  Contact,
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
      <Contact />
      <Testimonials />
      <Instagram />
    </>
  );
}
