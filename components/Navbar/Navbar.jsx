import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='gray.100'>
      <Flex
        w='100%'
        maxW='1100px'
        margin='auto'
        py={5}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Image
            src='/images/logo.png'
            alt='Financia 365 logo'
            width={200}
            height={200}
          />
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Link href='#' mr={4}>
            Home
          </Link>
          <Link href='#' mr={4}>
            Nosotros
          </Link>
          <Link href='#' mr={4}>
            Servicios
          </Link>
          <Link href='#' mr={4}>
            Contacto
          </Link>
        </Box>

        <IconButton
          aria-label='Abrir menú'
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          variant='outline'
          zIndex={2}
        />

        {isOpen && (
          <Box
            bg='white'
            h='100%'
            w='100%'
            position='absolute'
            top='0'
            right='0'
            zIndex='1'
            transition='transform 0.3s ease-in-out'
            transform='translateX(0%)'
            display={{ base: 'block', md: 'none' }}
          >
            <Box p={4}>
              <Link href='#' mr={4} mb={2}>
                Enlace 1
              </Link>
              <Link href='#' mr={4} mb={2}>
                Enlace 2
              </Link>
              <Link href='#' mr={4} mb={2}>
                Enlace 3
              </Link>
              <Link href='#' mr={4} mb={2}>
                Enlace 4
              </Link>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
