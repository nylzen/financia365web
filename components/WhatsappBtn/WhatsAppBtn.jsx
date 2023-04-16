import { Box, Button } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';

const whatsappLink = 'https://wa.link/95wgny';

const WhatsAppBtn = () => {
  return (
    <Button
      as='a'
      href={whatsappLink}
      target='_blank'
      colorScheme='whatsapp'
      position='fixed'
      bottom='20px'
      right='20px'
      borderRadius={50}
      width={70}
      height={70}
      fontSize={30}
    >
      <BsWhatsapp />
    </Button>
  );
};
export default WhatsAppBtn;
