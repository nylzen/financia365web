import {
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
            <Button colorScheme='yellow'>Solicita asesoría</Button>
          </VStack>
          <motion.div
            initial={{
              transform: 'translateY(50px)',
              opacity: 0,
            }}
            animate={{
              transform: 'translateY(0px)',
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Image
              src='/images/hero_img.svg'
              alt='Hero Image'
              width={502}
              height={502}
            />
          </motion.div>
        </Stack>
      </Center>
    </Container>
  );
};
export default Hero;