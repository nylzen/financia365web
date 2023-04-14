import { AboutHero, AboutInfo, AboutTeam } from '@/components';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';

const heroImg = '/images/about/about_hero_1x.webp';

const index = () => {
  return (
    <>
      <Head>
        <title>Nosotros</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Container maxW={'100%'} p={[5, 5, 20]} as='main'>
        <AboutHero title='Sobre Financia365' img={heroImg} />
        <AboutInfo />
        <AboutTeam />
      </Container>
    </>
  );
};
export default index;
