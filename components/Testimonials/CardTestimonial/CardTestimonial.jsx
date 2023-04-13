import { Image, Stack, Text, VStack } from '@chakra-ui/react';

const CardTestimonial = ({ img, name, testimonial, rating }) => {
  return (
    <VStack key={testimonial.id}>
      <Stack
        width='370px'
        border='1px'
        borderRadius={10}
        p={5}
        borderColor='rgba(0,0,0,0.3)'
      >
        <Stack direction='row' alignItems='center'>
          <Image src={img} alt={name} width={50} height={50} />
          <Text fontWeight='600' color='gray.700'>
            {name}
          </Text>
        </Stack>
        <Stack pt={5} gap={5}>
          <Text maxW='95%'>{testimonial}</Text>
          <Text as='span' color='brand.primary' fontSize='1.5rem'>
            {rating}
          </Text>
        </Stack>
      </Stack>
    </VStack>
  );
};
export default CardTestimonial;
