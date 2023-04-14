import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
// import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box bg='brand.black' p={10}>
      <Container as={Stack} maxW='6xl' color='white'>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 2fr 2fr 1fr' }}
          placeItems={['center', 'start']}
          alignItems='start'
          spacing={{ md: 8, sm: 10 }}
        >
          <Stack spacing={4}>
            <Box>
              <Text fontSize='20px'>Financia365</Text>
            </Box>
            <Text fontSize='sm' maxW='22rem'>
              Empresa conformada por Brokers y expertos financieros que han
              cambiado el concepto de Intermediación Financiera y lo han llevado
              a otro nivel.
            </Text>
            <Stack direction='row' spacing={6}>
              <Link href='https://www.facebook.com/financia365'>
                <BsFacebook />
              </Link>
              <Link href='https://www.facebook.com/financia365'>
                <BsInstagram />
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={6}>
            <Text fontWeight='bold'>Grupo</Text>
            <Stack>
              <Link href='#' isExternal>
                Vivienda365 <ExternalLinkIcon mx='2px' color='brand.primary' />
              </Link>
              <Link href='#' isExternal>
                Obras y Proyectos 365
                <ExternalLinkIcon mx='2px' color='brand.primary' />
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={6}>
            <Text fontWeight='bold'>Ubicación</Text>
            <Stack>
              <Text>El Carrascal</Text>
              <Text>Av. Rey Juan Carlos I, 57, 28916</Text>
              <Text>Leganés, Madrid</Text>
              <Text>910722294</Text>
            </Stack>
          </Stack>
          <Stack color='GrayText'>
            <Link>Políticas de privacidad</Link>
            <Link>Protección de datos</Link>
            <Link>Texto legal</Link>
            <Link>Cookies</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Footer;
