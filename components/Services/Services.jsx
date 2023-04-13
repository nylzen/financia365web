import {
  Center,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import CardServices from './CardServices/CardServices';
import { servicesData } from './data';

const Services = () => {
  return (
    <Container maxW='100%'>
      <Center as='section' py={20} margin='auto' maxW='1200px'>
        <VStack bg='brand.black' color='white' p={10} borderRadius={20}>
          <VStack gap={5}>
            <Heading>¿Cómo podemos ayudarte?</Heading>
            <Text maxW='650px' textAlign='center'>
              Somos asesores expertos en el sector inmobiliario y financiero,
              eso nos permite acompañarte en todo el trayecto hasta la obtención
              de tu vivienda.
            </Text>
          </VStack>
          <Stack pt={10} direction={{ md: 'row', sm: 'column' }} gap={2}>
            {servicesData.map(service => (
              <CardServices key={service.id} {...service} />
            ))}
          </Stack>
        </VStack>
      </Center>
    </Container>
  );
};
export default Services;
