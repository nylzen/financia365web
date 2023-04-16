import { whatsappLink } from '@/components/WhatsappBtn/WhatsAppBtn';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const CardServices = props => {
  const { title, description, image } = props;
  return (
    <Flex
      direction='column'
      alignItems={['center', 'flex-start']}
      bg='white'
      p={4}
      gap={5}
      borderRadius={10}
      color='brand.black'
    >
      <Image src={image} alt={title} width={300} height={230} />
      <Heading fontSize='30px'>{title}</Heading>
      <Text maxW='300px' textAlign={['center', 'left']}>
        {description}
      </Text>
      <Button
        colorScheme='yellow'
        mt={5}
        as='a'
        href={whatsappLink}
        target='_blank'
      >
        Más información
      </Button>
    </Flex>
  );
};
export default CardServices;
