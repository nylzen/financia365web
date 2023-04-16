import { AboutHero } from '@/components';
import {
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Financia365 | Protección de datos</title>
      </Head>
      <Container maxW={'100%'} p={[5, 5, 20]} as='main'>
        <AboutHero
          title='Protección de datos'
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
            Protección de datos de carácter personal según el RGPD
            <b> FINANCIA365.COM</b>, en aplicación de la normativa vigente en
            materia de protección de datos de carácter personal, informa que los
            datos personales que se recogen a través de los formularios del
            Sitio web:{' '}
            <Link href='/' color='blue.200'>
              www.financia365.com
            </Link>{' '}
            , se incluyen en los ficheros automatizados específicos de usuarios
            de los servicios de financia365.com,. La recogida y tratamiento
            automatizado de los datos de carácter personal tiene como finalidad
            el mantenimiento de la relación comercial y el desempeño de tareas
            de información, formación, asesoramiento y otras actividades propias
            de
            <b> financia365.com</b>,.
          </Text>
          <Text>
            {' '}
            Estos datos únicamente serán cedidos a aquellas entidades que sean
            necesarias con el único objetivo de dar cumplimiento a la finalidad
            anteriormente expuesta.
          </Text>
          <Text>
            {' '}
            <b>financia365.COM</b>, adopta las medidas necesarias para
            garantizar la seguridad, integridad y confidencialidad de los datos
            conforme a lo dispuesto en el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de los
            mismos.
          </Text>
          <Text>
            El usuario podrá en cualquier momento ejercitar los derechos de
            acceso, oposición, rectificación, cancelación, limitación y
            portabilidad reconocidos en el citado Reglamento (UE).
          </Text>
          <Text>
            El ejercicio de estos derechos puede realizarlo el propio usuario a
            través de email a: clientes@financia365.com o en la dirección: Av.
            de Gibraltar, Nº 7, Local 3, 28912 Leganés, Madrid. El usuario
            manifiesta que todos los datos facilitados por él son ciertos y
            correctos, y se compromete a mantenerlos actualizados, comunicando
            los cambios a financia365.COM.
          </Text>
          <Heading as='h3' fontSize='2xl'>
            1. ¿CON QUÉ FINALIDAD TRATAREMOS TUS DATOS PERSONALES?
          </Heading>
          <Text>
            VIVIENDAS365.COM, trataremos tus datos personales recabados a través
            del Sitio Web: www.financia365.com , con las siguientes finalidades:
          </Text>
          <OrderedList paddingLeft={5}>
            <ListItem>
              {' '}
              En caso de contratación de los bienes y servicios ofertados a
              través de{' '}
              <Link href='/' color='blue.200'>
                www.financia365.com
              </Link>{' '}
              , para mantener la relación contractual, así como la gestión,
              administración, información, prestación y mejora del servicio.
            </ListItem>
            <ListItem>
              Envío de información solicitada a través de los formularios
              dispuestos en{' '}
              <Link href='/' color='blue.200'>
                www.financia365.com
              </Link>
            </ListItem>
            <ListItem>
              {' '}
              Remitir boletines (newsletters), así como comunicaciones
              comerciales de promociones y/o publicidad de{' '}
              <Link href='/' color='blue.200'>
                www.financia365.com
              </Link>{' '}
              y del sector.
            </ListItem>
            <ListItem>
              Te recordamos que puedes oponerte al envío de comunicaciones
              comerciales por cualquier vía y en cualquier momento, remitiendo
              un correo electrónico a la dirección anteriormente indicada.
            </ListItem>
          </OrderedList>
          <Text>
            Los campos de dichos registros son de cumplimentación obligatoria,
            siendo imposible realizar las finalidades expresadas si no se
            aportan esos datos. ¿Por cuánto tiempo se conservan los datos
            personales recabados?
          </Text>
          <Text>
            Los datos personales proporcionados se conservarán mientras se
            mantenga la relación comercial o no solicites su supresión y durante
            el plazo por el cual pudieran derivarse responsabilidades legales
            por los servicios prestados. Legitimación: El tratamiento de tus
            datos se realiza con las siguientes bases jurídicas que legitiman el
            mismo:
          </Text>
          <UnorderedList paddingLeft={5}>
            <ListItem>
              1. La solicitud de información y/o la contratación de los
              servicios de financia365.COM, cuyos términos y condiciones se
              pondrán a tu disposición en todo caso, de forma previa a una
              eventual contratación.
            </ListItem>
            <ListItem>
              {' '}
              2. El consentimiento libre, específico, informado e inequívoco, en
              tanto que te informamos poniendo a tu disposición la presente
              política de privacidad, que tras la lectura de la misma, en caso
              de estar conforme, puedes aceptar mediante una declaración o una
              clara acción afirmativa, como el marcado de una casilla dispuesta
              al efecto. En caso de que no nos facilites tus datos o lo hagas de
              forma errónea o incompleta, no podremos atender tu solicitud,
              resultando del todo imposible proporcionarte la información
              solicitada o llevar a cabo la contratación de los servicios.
            </ListItem>
          </UnorderedList>
          <Text>
            {' '}
            Destinatarios: Los datos no se comunicarán a ningún tercero ajeno a
            financia365.com, salvo obligación legal.
          </Text>
          <Text>
            Como encargados de tratamiento, tenemos contratados a los siguientes
            proveedores de servicios, habiéndose comprometido al cumplimiento de
            las disposiciones normativas, de aplicación en materia de protección
            de datos, en el momento de su contratación:
          </Text>
          <Heading as='h3' fontSize='2xl'>
            2. DATOS RECOPILADOS POR USUARIOS DE LOS SERVICIOS
          </Heading>
          <Text>
            En los casos en que el usuario incluya ficheros con datos de
            carácter personal en los servidores de alojamiento compartido,
            financia365.COM, no se hace responsable del incumplimiento por parte
            del usuario del RGPD. Retención de datos en conformidad a la LSSI
            financia365.COM, informa de que, como prestador de servicio de
            alojamiento de datos y en virtud de lo establecido en la Ley 34/2002
            de 11 de julio de Servicios de la Sociedad de la Información y de
            Comercio Electrónico (LSSI), retiene por un periodo máximo de 12
            meses la información imprescindible para identificar el origen de
            los datos alojados y el momento en que se inició la prestación del
            servicio.
          </Text>
          <Text>
            {' '}
            La retención de estos datos no afecta al secreto de las
            comunicaciones y sólo podrán ser utilizados en el marco de una
            investigación criminal o para la salvaguardia de la seguridad
            pública, poniéndose a disposición de los jueces y/o tribunales o del
            Ministerio que así los requiera.
          </Text>
          <Text>
            La comunicación de datos a las Fuerzas y Cuerpos del Estado se hará
            en virtud a lo dispuesto en la normativa sobre protección de datos
            personales. Derechos propiedad intelectual{' '}
            <Link href='/' color='blue.200'>
              www.financia365.com
            </Link>
            . financia365.COM, es titular de todos los derechos de autor,
            propiedad intelectual, industrial, «know how» y cuantos otros
            derechos guardan relación con los contenidos del sitio web
            www.financia365.com y los servicios ofertados en el mismo, así como
            de los programas necesarios para su implementación y la información
            relacionada.
          </Text>
          <Text>
            {' '}
            La retención de estos datos no afecta al secreto de las
            comunicaciones y sólo podrán ser utilizados en el marco de una
            investigación criminal o para la salvaguardia de la seguridad
            pública, poniéndose a disposición de los jueces y/o tribunales o del
            Ministerio que así los requiera.
          </Text>
          <Text>
            La comunicación de datos a las Fuerzas y Cuerpos del Estado se hará
            en virtud a lo dispuesto en la normativa sobre protección de datos
            personales. Derechos propiedad intelectual{' '}
            <Link href='/' color='blue.200'>
              www.financia365.com
            </Link>
            . financia365.COM, es titular de todos los derechos de autor,
            propiedad intelectual, industrial, «know how» y cuantos otros
            derechos guardan relación con los contenidos del sitio web{' '}
            <Link href='/' color='blue.200'>
              www.financia365.com
            </Link>{' '}
            y los servicios ofertados en el mismo, así como de los programas
            necesarios para su implementación y la información relacionada.
          </Text>
          <Text>
            {' '}
            No se permite la reproducción, publicación y/o uso no estrictamente
            privado de los contenidos, totales o parciales, del sitio web{' '}
            <Link href='/' color='blue.200'>
              www.financia365.com
            </Link>{' '}
            sin el consentimiento previo y por escrito.
          </Text>
          <Heading as='h3' fontSize='2xl'>
            3. PROPIEDAD INTELECTUAL DEL SOFTWARE
          </Heading>
          <Text>
            El usuario debe respetar los programas de terceros puestos a su
            disposición por <b> financia365.COM </b>aún siendo gratuitos y/o de
            disposición pública.
          </Text>
          <Text>
            {' '}
            <b>financia365.COM </b>dispone de los derechos de explotación y
            propiedad intelectual necesarios del software. El usuario no
            adquiere derecho alguno o licencia por el servicio contratado, sobre
            el software necesario para la prestación del servicio, ni tampoco
            sobre la información técnica de seguimiento del servicio, excepción
            hecha de los derechos y licencias necesarios para el cumplimiento de
            los servicios contratados y únicamente durante la duración de los
            mismos.
          </Text>
          <Text>
            {' '}
            Para toda actuación que exceda del cumplimiento del contrato, el
            usuario necesitará autorización por escrito por parte de{' '}
            <b>financia365.COM</b> quedando prohibido al usuario acceder,
            modificar, visualizar la configuración, estructura y ficheros de los
            servidores propiedad de <b> financia365.COM </b> asumiendo la
            responsabilidad civil y penal derivada de cualquier incidencia que
            se pudiera producir en los servidores y sistemas de seguridad como
            consecuencia directa de una actuación negligente o maliciosa por su
            parte.
          </Text>
          <Heading as='h3' fontSize='2xl'>
            4. PROPIEDAD INTELECTUAL DE LOS CONTENIDOS ALOJADOS
          </Heading>
          <Text>
            Se prohíbe el uso contrario a la legislación sobre propiedad
            intelectual de los servicios prestados por JORDI financia365.COM y,
            en particular de:
          </Text>
          <UnorderedList paddingLeft={5}>
            <ListItem>
              La utilización que resulte contraria a las leyes españolas o que
              infrinja los derechos de terceros.
            </ListItem>
            <ListItem>
              La publicación o la transmisión de cualquier contenido que, a
              juicio de financia365.COM, resulte violento, obsceno, abusivo,
              ilegal, racial, xenófobo o difamatorio.
            </ListItem>
            <ListItem>
              {' '}
              Los cracks, números de serie de programas o cualquier otro
              contenido que vulnere derechos de la propiedad intelectual de
              terceros.
            </ListItem>
            <ListItem>
              {' '}
              La recogida y/o utilización de datos personales de otros usuarios
              sin su consentimiento expreso o contraviniendo lo dispuesto en el
              Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de
              27 de abril de 2016, relativo a la protección de las personas
              físicas en lo que respecta al tratamiento de datos personales y a
              la libre circulación de los mismos.
            </ListItem>
            <ListItem>
              {' '}
              La utilización del servidor de correo del dominio y de las
              direcciones de correo electrónico para el envío de correo masivo
              no deseado.
            </ListItem>
          </UnorderedList>
          <Text>
            {' '}
            El usuario tiene toda la responsabilidad sobre el contenido de su
            web, la información transmitida y almacenada, los enlaces de
            hipertexto, las reivindicaciones de terceros y las acciones legales
            en referencia a propiedad intelectual, derechos de terceros y
            protección de menores.
          </Text>
          <Text>
            El usuario es responsable respecto a las leyes y reglamentos en
            vigor y las reglas que tienen que ver con el funcionamiento del
            servicio online, comercio electrónico, derechos de autor,
            mantenimiento del orden público, así como principios universales de
            uso de Internet.
          </Text>
          <Text>
            {' '}
            El usuario indemnizará a <b> financia365.COM </b> por los gastos que
            generara la imputación de <b>financia365.COM</b> en alguna causa
            cuya responsabilidad fuera atribuible al usuario, incluidos
            honorarios y gastos de defensa jurídica, incluso en el caso de una
            decisión judicial no definitiva.
          </Text>
          <Heading as='h3' fontSize='2xl'>
            5. PROTECCIÓN DE LA INFORMACIÓN ALOJADA:
          </Heading>
          <Text>
            {' '}
            <b>financia365.COM </b>realiza copias de seguridad de los contenidos
            alojados en sus servidores, sin embargo no se responsabiliza de la
            pérdida o el borrado accidental de los datos por parte de los
            usuarios. De igual manera, no garantiza la reposición total de los
            datos borrados por los usuarios, ya que los citados datos podrían
            haber sido suprimidos y/o modificados durante el periodo del tiempo
            transcurrido desde la última copia de seguridad.
          </Text>
          <Text>
            {' '}
            Los servicios ofertados, excepto los servicios específicos de
            backup, no incluyen la reposición de los contenidos conservados en
            las copias de seguridad realizadas por <b>financia365.COM</b>,
            cuando esta pérdida sea imputable al usuario; en este caso, se
            determinará una tarifa acorde a la complejidad y volumen de la
            recuperación, siempre previa aceptación del usuario. La reposición
            de datos borrados sólo está incluida en el precio del servicio
            cuando la pérdida del contenido sea debida a causas atribuibles a
            <b>financia365.COM</b>
          </Text>
          <Heading as='h3' fontSize='2xl'>
            6. COMUNICACIONES COMERCIALES EN APLICACIÓN DE LA LSSI
          </Heading>
          <Text>
            financia365.COM no enviará comunicaciones publicitarias o
            promocionales por correo electrónico u otro medio de comunicación
            electrónica equivalente que previamente no hubieran sido solicitadas
            o expresamente autorizadas por los destinatarios de las mismas. En
            el caso de usuarios con los que exista una relación contractual
            previa, financia365.COM sí está autorizado al envío de
            comunicaciones comerciales referentes a productos o servicios de
            financia365.COM que sean similares a los que inicialmente fueron
            objeto de contratación con el cliente. En todo caso, el usuario,
            tras acreditar su identidad, podrá solicitar que no se le haga
            llegar más información comercial a través de los canales de Atención
            al Cliente.
          </Text>
        </VStack>
      </Container>
    </>
  );
};
export default index;
