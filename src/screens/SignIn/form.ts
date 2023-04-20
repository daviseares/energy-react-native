import { FormValidator } from '~/modules';

export const initialValues = {
  email: '',
  password: ''
};

export type FormValues = typeof initialValues;

export const validationSchema = FormValidator.object().shape({
  email: FormValidator.string().email().required('Email is required'),
  password: FormValidator.string().min(8).required('Password is required')
});
