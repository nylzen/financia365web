import { AboutHero } from '@/components';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

const index = () => {
  //   return <div>index</div>;
  return (
    <>
      <Head>
        <title>Financia365 | Texto Legal</title>
      </Head>
      <Container maxW={'100%'} p={[5, 5, 20]} as='main'>
        <AboutHero title='Texto legal' img='/images/about/about_hero_1x.webp' />
        <VStack
          spacing={8}
          maxW={['100%', '100%', '1000px']}
          margin='auto'
          mt={8}
          alignItems='flex-start'
          as={'section'}
        >
          <Text>
            financia365.COM; dirección en: Av. de Gibraltar, Nº 7, Local 3,
            28912 Leganés, Madrid, no puede asumir ninguna responsabilidad
            derivada del uso incorrecto, inapropiado o ilícito de la información
            aparecida en las páginas web de: www.financia365.com.
          </Text>
          <Text>
            Con los límites establecidos en la ley FINANCIA365.COM , no asume
            ninguna responsabilidad derivada de la falta de veracidad,
            integridad, actualización y precisión de los datos o informaciones
            que contienen sus páginas web.
          </Text>
          <Text>
            Los contenidos e información no vinculan a FINANCIA365.COM ni
            constituyen opiniones, consejos o asesoramiento legal de ningún tipo
            pues se trata meramente de un servicio ofrecido con carácter
            informativo y divulgativo.
          </Text>
          <Text>
            Las páginas de Internet de FINANCIA365.COM pueden contener enlaces
            (links) a otras páginas de terceras partes que FINANCIA365.COM no
            puede controlar. Por lo tanto, FINANCIA365.COM no puede asumir
            responsabilidades por el contenido que pueda aparecer en páginas de
            terceros.
          </Text>
          <Text>
            Los textos, imágenes, sonidos, animaciones, software y el resto de
            contenidos incluidos en este website son propiedad exclusiva de
            FINANCIA365.COM o sus licenciantes. Cualquier acto de transmisión,
            distribución, cesión, reproducción, almacenamiento o comunicación
            pública total o parcial, deberá contar con el consentimiento expreso
            de financia365.COM. Asimismo, para acceder a algunos de los
            servicios que FINANCIA365.COM ofrece a través del sitio web, deberá
            proporcionar algunos datos de carácter personal.
          </Text>
          <Text>
            En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de estos
            datos le informamos que, mediante la cumplimentación de los
            presentes formularios, sus datos personales quedarán incorporados y
            serán tratados en los ficheros de FINANCIA365.COM con el fin de
            poderle prestar y ofrecer nuestros servicios así como para
            informarle de las mejoras del sitio Web.
          </Text>
          <Text>
            Le informamos también de que tendrá la posibilidad en todo momento
            de ejercer los derechos de acceso, rectificación, cancelación,
            oposición, limitación y portabilidad de sus datos de carácter
            personal, de manera gratuita mediante email a:
            clientes@financia365.com o en la dirección: Av. de Gibraltar, Nº 7,
            Local 3, 28912 Leganés, Madrid.
          </Text>
        </VStack>
      </Container>
    </>
  );
};
export default index;
