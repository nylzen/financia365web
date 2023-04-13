import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const CTA = () => {
  return (
    <Container maxW='100%'>
      <Box maxW='1100px' as='section' margin='auto' py={5}>
        <Flex
          minH={['auto', 'auto', '500px']}
          bgImage='/images/cta.webp'
          bgRepeat='no-repeat'
          bgSize='cover'
          bgPosition='center'
          p={5}
          borderRadius={20}
          alignItems='flex-end'
        >
          <VStack
            bg='white'
            maxW='500px'
            p={5}
            borderRadius={20}
            alignItems={['center', 'flex-start']}
            gap={5}
            boxShadow='sm'
          >
            <Heading textAlign={['center', 'left']} fontSize={['2xl', '4xl']}>
              ¡Toma acción ahora y consigue el dinero que necesitas para tus
              proyectos y metas!
            </Heading>
            <Button as='a' colorScheme='yellow' href='https://www.google.com'>
              Solicita asesoría
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};
export default CTA;
