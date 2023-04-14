import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { team } from './data';
const AboutTeam = () => {
  return (
    <Stack
      maxW={['100%', '100%', '100%', '1050px']}
      margin={'auto'}
      py={20}
      direction='column'
      spacing={20}
    >
      <Heading fontSize='2xl' textAlign={['center', 'center', 'left']}>
        Nuestro equipo, tu tranquilidad financiera.
      </Heading>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        alignItems='center'
      >
        {team.map(member => (
          <Card key={member.id} w='xl' maxW='fit-content'>
            <CardBody>
              <Image
                src={member.image}
                alt={member.name}
                width={328}
                height={328}
              />

              <Stack alignItems='center' pt={8}>
                <Heading fontSize='2xl'>{member.name}</Heading>
                <Text>{member.position}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
export default AboutTeam;
