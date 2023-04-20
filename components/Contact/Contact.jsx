import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';

import {
  contactFormInitialValues,
  contactFormValidationSchema,
} from '@/formik';
import { MAP_URL } from '@/utils/constants';
import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Contact = () => {
  return (
    <Container maxW='100%' as='section' id='contacto' py={20}>
      <Center maxW={['100%', '100%', '100%', '1200px']} margin={'auto'}>
        <Stack
          w='90%'
          direction={['column', 'column', 'column', 'row']}
          spacing={[10, 10, 10, 20]}
        >
          <VStack
            direction='column'
            alignItems='start'
            minW={['100%', '100%', '100%', '400px']}
            spacing={5}
          >
            <Heading>Contáctanos</Heading>
            {/* <Stack
              as='form'
              minW={['100%', '100%', '100%', '400px']}
              spacing={5}
              alignItems='start'
            >
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input name='user_name' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Teléfono</FormLabel>
                <Input name='user_phone' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input name='user_email' />
              </FormControl>
              <FormControl>
                <FormLabel>Mensaje</FormLabel>
                <Textarea name='user_msg' />
              </FormControl>
              <Button colorScheme='yellow' type='submit'>
                Enviar
              </Button>
            </Stack> */}
            <Formik
              initialValues={contactFormInitialValues}
              validationSchema={contactFormValidationSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                const templateParams = {
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  message: values.message,
                };
                emailjs.send(
                  'service_1ad3xd3',
                  'template_axxvxkv',
                  templateParams,
                  'qjSySmslaSv6DxTS3'
                );
                actions.resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <VStack
                    minW={['80vw', '80vw', '80vw', '400px']}
                    spacing={4}
                    alignItems='center'
                  >
                    <FormControl isInvalid={errors.name && touched.name}>
                      <FormLabel htmlFor='name'>Nombre</FormLabel>
                      <Field as={Input} id='name' name='name' />
                      <ErrorMessage name='name'>
                        {msg => <Text color='red.500'>{msg}</Text>}
                      </ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.email && touched.email}>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <Field as={Input} id='email' name='email' />
                      <ErrorMessage name='email'>
                        {msg => <Text color='red.500'>{msg}</Text>}
                      </ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.phone && touched.phone}>
                      <FormLabel htmlFor='phone'>Teléfono</FormLabel>
                      <Field as={Input} id='phone' name='phone' />
                      <ErrorMessage name='phone'>
                        {msg => <Text color='red.500'>{msg}</Text>}
                      </ErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor='message'>Mensaje</FormLabel>
                      <Field as={Textarea} id='message' name='message' />
                      <ErrorMessage name='message'>
                        {msg => <Text color='red.500'>{msg}</Text>}
                      </ErrorMessage>
                    </FormControl>
                    <Button
                      colorScheme='yellow'
                      type='submit'
                      alignSelf='flex-start'
                    >
                      Enviar
                    </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
          <Box minH='400px' w='100%'>
            <AspectRatio ratio={1}>
              <iframe src={MAP_URL} />
            </AspectRatio>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};
export default Contact;
