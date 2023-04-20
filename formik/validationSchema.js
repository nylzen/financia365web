import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string().email('Email Inválido').required('Campo Requerido'),
  phone: Yup.string().required('Campo Requerido'),
});
