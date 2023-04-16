import { AboutHero } from '@/components';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
// import Link from 'next/link';

const index = () => {
  return (
    <>
      <Head>
        <title>Financia365 | Cookies</title>
      </Head>
      <Container maxW={'100%'} p={[5, 5, 20]} as='main'>
        <AboutHero title='Cookies' img='/images/about/about_hero_1x.webp' />
        <VStack
          spacing={8}
          maxW={['100%', '100%', '1000px']}
          margin='auto'
          mt={8}
          alignItems='flex-start'
        >
          <Text>
            Esta Política de cookies explica qué son las cookies y cómo las
            usamos. Debe leer esta política para comprender qué son las cookies,
            cómo las utilizamos, los tipos de cookies que utilizamos, es decir,
            la información que recopilamos utilizando cookies y cómo se utiliza
            esa información y cómo controlar las preferencias de las cookies.
          </Text>
          <Text>
            Para obtener más información sobre cómo usamos, almacenamos y
            mantenemos seguros sus datos personales, consulte nuestra Política
            de privacidad. En cualquier momento puede cambiar o retirar su
            consentimiento de la Declaración de cookies en nuestro sitio web.
          </Text>
          <Text>
            Obtenga más información sobre quiénes somos, cómo puede contactarnos
            y cómo procesamos los datos personales en nuestra Política de
            privacidad. Su consentimiento se aplica al siguiente dominio:
            www.financia365.comTu estado actual: Consentimiento aceptado
          </Text>
          <Heading>¿QUÉ SON LAS COOKIES?</Heading>
          <Text>
            Las cookies son pequeños archivos de texto que se utilizan para
            almacenar pequeñas piezas de información. Las cookies se almacenan
            en su dispositivo cuando el sitio web se carga en su navegador.
            Estas cookies nos ayudan a hacer que el sitio web funcione
            correctamente, hacer que el sitio web sea más seguro, proporcionar
            una mejor experiencia de usuario y comprender cómo funciona el sitio
            web y analizar qué funciona y dónde necesita mejorar.
          </Text>
          <Heading>¿CÓMO USAMOS LAS COOKIES?</Heading>
          <Text>
            Como la mayoría de los servicios en línea, nuestro sitio web utiliza
            cookies propias y de terceros para una serie de propósitos. Las
            cookies de origen son principalmente necesarias para que el sitio
            web funcione de la manera correcta, y no recopilan ninguno de sus
            datos de identificación personal.
          </Text>
          <Text>
            Las cookies de terceros utilizadas en nuestros sitios web se
            utilizan principalmente para comprender cómo funciona el sitio web,
            cómo interactúa con nuestro sitio web, mantener nuestros servicios
            seguros, proporcionarle anuncios que sean relevantes para usted y,
            en general, proporcionarle una mejor y mejor experiencia de usuario
            y ayuda a acelerar sus futuras interacciones con nuestro sitio web.
          </Text>
          <Heading>¿QUÉ TIPOS DE COOKIES UTILIZAMOS?</Heading>
          <Text>
            Esencial: algunas cookies son esenciales para que pueda experimentar
            la funcionalidad completa de nuestro sitio. Nos permiten mantener
            sesiones de usuario y evitar amenazas de seguridad. No recopilan ni
            almacenan ninguna información personal. Por ejemplo, estas cookies
            le permiten iniciar sesión en su cuenta y agregar productos a su
            cesta y pagar de forma segura.
          </Text>
          <Text>
            Estadísticas: estas cookies almacenan información como el número de
            visitantes del sitio web, el número de visitantes únicos, qué
            páginas del sitio web han sido visitadas, la fuente de la visita,
            etc. Estos datos nos ayudan a comprender y analizar qué tan bien
            funciona el sitio web y donde necesita mejorar.
          </Text>
          <Text>
            Marketing: nuestro sitio web muestra anuncios. Estas cookies se
            utilizan para personalizar los anuncios que le mostramos para que
            sean significativos para usted. Estas cookies también nos ayudan a
            realizar un seguimiento de la eficacia de estas campañas
            publicitarias.
          </Text>
          <Text>
            La información almacenada en estas cookies también puede ser
            utilizada por proveedores de publicidad externos para mostrarle
            anuncios en otros sitios web en el navegador.
          </Text>
          <Text>
            Funcional: Estas son las cookies que ayudan a ciertas
            funcionalidades no esenciales en nuestro sitio web. Estas
            funcionalidades incluyen incrustar contenido como videos o compartir
            contenido en el sitio web en plataformas de redes sociales.
          </Text>
          <Text>
            Preferencias: estas cookies nos ayudan a almacenar su configuración
            y preferencias de navegación, como las preferencias de idioma, para
            que tenga una mejor y más eficiente experiencia en futuras visitas
            al sitio web.
          </Text>
          <Heading>¿CÓMO PUEDO CONTROLAR LAS PREFERENCIAS DE COOKIES?</Heading>
          <Text>
            {' '}
            Si decide cambiar sus preferencias más adelante a través de su
            sesión de navegación, puede hacer clic en la pestaña «Política de
            privacidad y cookies» en su pantalla. Esto mostrará el aviso de
            consentimiento nuevamente, permitiéndole cambiar sus preferencias o
            retirar su consentimiento por completo.
          </Text>
          <Text>
            Además de esto, diferentes navegadores proporcionan diferentes
            métodos para bloquear y eliminar las cookies utilizadas por los
            sitios web. Puede cambiar la configuración de su navegador para
            bloquear / eliminar las cookies. Para obtener más información sobre
            cómo administrar y eliminar cookies, visite:
          </Text>
          <Link
            href='http://www.allaboutcookies.org/'
            isExternal
            color='blue.200'
          >
            wikipedia.org, www.allaboutcookies.org
            <ExternalLinkIcon mx='2px' />
          </Link>
        </VStack>
      </Container>
    </>
  );
};
export default index;
