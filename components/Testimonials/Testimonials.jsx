import { Button, Center, Container, Heading, Stack } from '@chakra-ui/react';
import CardTestimonial from './CardTestimonial/CardTestimonial';
import { testimonialsData } from './data';

const reviewLink =
  'https://www.google.com/maps/place/FINANCIA+365/@40.3358969,-3.7420385,17z/data=!4m8!3m7!1s0xd418b7e78715d3b:0x9a8cbadc3e6e708c!8m2!3d40.3358969!4d-3.7420385!9m1!1b1!16s%2Fg%2F11jpngf485';

const Testimonials = () => {
  return (
    <Container maxW='100%'>
      <Center as='section' flexDirection='column' gap={10} py={10}>
        <Heading textAlign='center'>Las opiniones que importan</Heading>
        <Stack direction={['column', 'column', 'row']} maxW='100%'>
          {testimonialsData.map(testimonial => (
            <CardTestimonial key={testimonial.id} {...testimonial} />
          ))}
        </Stack>
        <Button colorScheme='yellow' as='a' href={reviewLink} target='_blank'>
          Deja tu reseña
        </Button>
      </Center>
    </Container>
  );
};
export default Testimonials;
