import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { BsInstagram } from 'react-icons/bs';
import { postData } from './data';

const InstagramLink = 'https://www.instagram.com/financia365/';

const Instagram = () => {
  return (
    <Container maxW='100%'>
      <Flex
        as='section'
        py={20}
        maxW='1100px'
        m='auto'
        direction='column'
        gap={7}
      >
        <Stack
          direction='row'
          w='100%'
          justifyContent='space-between'
          alignItems='center'
        >
          <HStack>
            <Icon
              as={BsInstagram}
              boxSize={8}
              bg='black'
              color='white'
              w={10}
              h={10}
              p={2}
              borderRadius={10}
            />
            <Text fontWeight='bold'>@financia365</Text>
          </HStack>
          <Button
            colorScheme='yellow'
            as='a'
            href={InstagramLink}
            target='_blank'
          >
            Siguenos
          </Button>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          alignItems='center'
          gap={2}
        >
          {postData.map(post => (
            <Box key={post.id}>
              <Image src={post.img} alt={post.alt} height={267} width={267} />
            </Box>
          ))}
        </Stack>
      </Flex>
    </Container>
  );
};
export default Instagram;
