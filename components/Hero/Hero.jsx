import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { whatsappLink } from '../WhatsappBtn/WhatsAppBtn';

const Hero = () => {
  return (
    <Container maxW='100%'>
      <Center
        as='section'
        py={20}
        bg='gray.100'
        maxW={{ md: '1200px', sm: '100%' }}
        margin='auto'
      >
        <Stack
          direction={['column', 'column', 'row']}
          spacing={8}
          align={['center', 'center']}
        >
          <VStack maxW='500' gap={5} alignItems={['center', 'flex-start']}>
            <Heading textAlign={['center', 'left']}>
              Tenemos la hipoteca que se ajusta a tu medida.
            </Heading>
            <Text fontSize='lg' textAlign={['center', 'left']}>
              En <b>Financia365</b>, nos esforzamos por brindarte el mejor
              asesoramiento en la hipoteca de tu próxima vivienda.
            </Text>
            <Button
              colorScheme='yellow'
              as='a'
              href={whatsappLink}
              target='_blank'
            >
              Solicita asesoría
            </Button>
          </VStack>
          <Box>
            <Image
              priority
              src='/images/s_hero_img.webp'
              alt='Hero Image'
              width={502}
              height={502}
            />
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};
export default Hero;
