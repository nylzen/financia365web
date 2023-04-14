import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  StackDivider,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='gray.100'>
      <Flex
        w='100%'
        maxW='1100px'
        margin='auto'
        py={5}
        px={5}
        justifyContent='space-between'
        alignItems='center'
      >
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='Financia 365 logo'
            width={200}
            height={200}
          />
        </Link>

        <Box display={{ base: 'none', md: 'flex' }} gap={4}>
          <Link href='/'>Home</Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='#'>Servicios</Link>
          <Link href='#'>Contacto</Link>
        </Box>

        <IconButton
          aria-label='Abrir menú'
          display={{ base: 'block', md: 'none' }}
          position={isOpen ? 'fixed' : 'static'}
          right={5}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          zIndex={2}
        />

        {isOpen && (
          <Box
            bg='white'
            h='100%'
            w='100%'
            position='fixed'
            top='0'
            right='0'
            zIndex='1'
          >
            <Stack
              p={4}
              alignItems='center'
              justifyContent='center'
              h='100vh'
              gap={8}
              fontSize={'3xl'}
              divider={<StackDivider borderColor='gray.200' />}
            >
              <Link href='/' onClick={onClose}>
                Home
              </Link>{' '}
              <Link href='/nosotros' onClick={onClose}>
                Nosotros
              </Link>
              <Link href='#' onClick={onClose}>
                Servicios
              </Link>
              <Link href='#' onClick={onClose}>
                Contacto
              </Link>
            </Stack>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
