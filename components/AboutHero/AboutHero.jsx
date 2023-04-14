import { Box, Container, Heading } from '@chakra-ui/react';
const AboutHero = ({ title, img }) => {
  return (
    <Box
      bgImage={img}
      bgSize='cover'
      minH='250px'
      maxW={['100%', '100%', '100%', '1050px']}
      margin='auto'
      borderRadius='40px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Heading
        textAlign='center'
        color='white'
        textTransform='uppercase'
        fontSize='4xl'
      >
        {title}
      </Heading>
    </Box>
  );
};
export default AboutHero;
