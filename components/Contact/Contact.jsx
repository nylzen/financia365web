import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.280459214615!2d-3.746268684364072!3d40.336124068461295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189fdf1f4368f%3A0x7676952a99775d2d!2sAv.%20Rey%20Juan%20Carlos%20I%2C%2057%2C%2028916%20Legan%C3%A9s%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1681138322762!5m2!1ses-419!2sar';

const Contact = () => {
  return (
    <Container maxW='100%' as='section' id='contacto' py={20}>
      <Center maxW={['100%', '100%', '100%', '1200px']} margin={'auto'}>
        <Stack
          w='90%'
          direction={['column', 'column', 'column', 'row']}
          spacing={[10, 10, 10, 20]}
        >
          <VStack
            direction='column'
            alignItems='start'
            minW={['100%', '100%', '100%', '400px']}
            spacing={5}
          >
            <Heading>Contáctanos</Heading>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Teléfono</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
            <Button colorScheme='yellow'>Enviar</Button>
          </VStack>
          <Box minH='400px' w='100%'>
            <AspectRatio ratio={1}>
              <iframe src={mapUrl} />
            </AspectRatio>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};
export default Contact;
