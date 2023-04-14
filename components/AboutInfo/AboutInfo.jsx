import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const AboutInfo = () => {
  return (
    <Stack
      maxW={['100%', '100%', '100%', '1050px']}
      margin={'auto'}
      py={20}
      direction={['column', 'column', 'column', 'row']}
      spacing={20}
    >
      <Stack direction='column' spacing={8}>
        <Heading fontSize='3xl'>Nuestra Misión y visión</Heading>
        <Text>
          <b>FINANCIA 365</b> es una empresa conformada por Brokers y expertos
          financieros que han cambiado el concepto de Intermediación Financiera
          y lo han llevado a otro nivel, ofreciendo a sus clientes las mejores
          opciones y condiciones a la hora de optar por Préstamos Bancarios ya
          sean Hipotecarios, Préstamos personales o por la Reunificación de sus
          deudas. Otorgándoles así tranquilidad y estabilidad económica.
        </Text>
        <Text>
          Además, en FINANCIA 365 te brindamos la oportunidad de decidir qué
          entidad financiera se adapta mejor a tus necesidades, ya que tenemos
          convenios con las principales entidades bancarias del país.
        </Text>
        <Text>
          Somos un equipo que presta servicios a nivel nacional, y nos enfocamos
          en brindar estudios personalizados adaptados a las necesidades y
          requerimientos de cada uno de nuestros clientes.
        </Text>
      </Stack>
      <Image
        src='/images/about/about_info.svg'
        alt='Oficina 365'
        width={497}
        height={497}
      />
    </Stack>
  );
};
export default AboutInfo;
