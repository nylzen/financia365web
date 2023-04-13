import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const CardServices = props => {
  const { title, description, image } = props;
  return (
    <Flex
      direction='column'
      alignItems={{ md: 'flex-start', sm: 'center' }}
      bg='white'
      p={4}
      gap={5}
      borderRadius={10}
      color='brand.black'
    >
      <Image src={image} alt={title} width={300} height={230} />
      <Heading fontSize='30px'>{title}</Heading>
      <Text maxW='300px' textAlign={{ md: 'left', sm: 'center' }}>
        {description}
      </Text>
      <Button colorScheme='yellow' mt={5}>
        Más información
      </Button>
    </Flex>
  );
};
export default CardServices;
