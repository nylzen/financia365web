import { AboutHero } from '@/components';
import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Financia365 | Políticas de privacidad</title>
      </Head>
      <Container maxW={'100%'} p={[5, 5, 20]} as='main'>
        <AboutHero
          title='Politicas de privacidad'
          img='/images/about/about_hero_1x.webp'
        />
        <VStack
          spacing={8}
          maxW={['100%', '100%', '1000px']}
          margin='auto'
          mt={8}
          alignItems='flex-start'
        >
          <Text>
            INMOBILIARIA VIVIENDAS 365 SRL es el Responsable del tratamiento de
            los datos personales del usuario y le informa que estos datos serán
            tratados de conformidad con lo dispuesto en el Reglamento (UE)
            2016/679, de 27 de abril de 2016 (RGPD), y en la Ley Orgánica
            3/2018, de 5 de diciembre (LOPDGDD), por lo que se le facilita la
            siguiente información del tratamiento:
          </Text>
          <Text>
            Fin del tratamiento: mantener una relación comercial y el envío de
            comunicaciones sobre nuestros productos y servicios.
          </Text>
          <Text>
            Criterios de conservación de los datos: se conservarán mientras
            exista un interés mutuo para mantener el fin del tratamiento y
            cuando ya no sea necesario para tal fin, se suprimirán con medidas
            de seguridad adecuadas para garantizar la seudonimización de los
            datos o la destrucción total de los mismos.
          </Text>
          <Text>
            Comunicación de los datos: No se comunicarán los datos a terceros,
            salvo obligación legal.
          </Text>
          <Text>Derechos que asisten al usuario:</Text>
          <UnorderedList paddingLeft={5}>
            <ListItem>
              Derecho a retirar el consentimiento en cualquier momento.
            </ListItem>
            <ListItem>
              Derecho de acceso, rectificación, portabilidad y supresión de sus
              datos y a la limitación u oposición al su tratamiento.
            </ListItem>
            <ListItem>
              {' '}
              Derecho a presentar una reclamación ante la Autoridad de Control
              (www.aepd.es) si considera que el tratamiento no se ajusta a la
              normativa vigente.
            </ListItem>
          </UnorderedList>
          <Text>Datos de contacto para ejercer sus derechos</Text>
          <UnorderedList paddingLeft={5}>
            <ListItem>
              <b>Dirección postal:</b> INMOBILIARIA VIVIENDAS 365 SRL, Av.
              Gibraltar Nº 7, local 3. C.P: 28912 Leganés, Madrid.
            </ListItem>
            <ListItem>
              <b>Email:</b> clientes@viviendas365.com
            </ListItem>
            <ListItem>
              Para continuar, usted debe aceptar que ha leído y está conforme
              con la cláusula anterior debe aceptarla expresamente.
            </ListItem>
          </UnorderedList>
        </VStack>
      </Container>
    </>
  );
};
export default index;
