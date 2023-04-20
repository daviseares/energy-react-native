import { FormValidator } from '~/modules';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export type FormValues = typeof initialValues;

export const validationSchema = FormValidator.object().shape({
  firstName: FormValidator.string().required('First name is required'),
  lastName: FormValidator.string().required('Last name is required'),
  email: FormValidator.string().email().required('Email is required'),
  password: FormValidator.string().min(8).required('Password is required')
});
