import {
  Center,
  Container,
  Flex,
  Heading,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { banksData } from './data';

const Banks = () => {
  return (
    <Container maxW='100%'>
      <Center as='section' py={20}>
        <VStack divider={<StackDivider />} gap={8}>
          <Heading textAlign={['center', 'center']}>
            Bancos que trabajamos
          </Heading>
          <Flex
            maxW='900px'
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            gap={8}
            margin='auto'
          >
            {banksData.map(bank => (
              <Image
                key={bank.id}
                src={bank.logo}
                width={250}
                height={bank.height}
                alt={bank.name}
              />
            ))}
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
};
export default Banks;
