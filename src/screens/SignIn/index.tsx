import { type FC } from 'react';
import { Button, TextInput, Touchable } from '~/components';
import { AsyncStorage, Formik, useSelector } from '~/modules';
import { NavigationActions, generateToken } from '~/services';
import { type RootState } from '~/stores';
import { Routes, Stacks, useAlerts } from '~/utils';
import { type FormValues, initialValues, validationSchema } from './form';
import * as S from './styles';
import { Wrapper } from './styles';

const SignIn: FC = () => {
  const { showError, showSuccess } = useAlerts();
  const user = useSelector((state: RootState) => state.data);

  const navigateToSignUp = (): void => {
    NavigationActions.navigate(Routes.SIGN_UP);
  };

  console.log(user);

  const onLogin = async (values: FormValues): Promise<void> => {
    const { email, password } = values;
    const userExists = user.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      NavigationActions.resetRouteToTop(Stacks.PRIVATE);
      const token = generateToken(10);

      await AsyncStorage.setItem('user:token', token);
      showSuccess('Login successfully');
    } else {
      showError('User not found');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onLogin}
      validationSchema={validationSchema}
      validateOnMount={false}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        values,
        errors
      }) => (
        <Wrapper>
          <S.Title>Login</S.Title>

          <TextInput
            label="E-mail"
            placeholder="Place your e-mail here"
            autoCapitalize='none'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={touched && errors.email}
          />
          <TextInput
            label="Password"
            secret
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={touched && errors.password}
            placeholder="Minimum 8 characteres"
          />

          <Button onPress={handleSubmit}>Login</Button>

          <S.TextWrapper>
            <S.Text>{"Don't have an account? "}</S.Text>
            <Touchable onPress={navigateToSignUp}>
              <S.Underline>Sign up</S.Underline>
            </Touchable>
            <S.Text>{' here.'}</S.Text>
          </S.TextWrapper>
        </Wrapper>
      )}
    </Formik>
  );
};

export default SignIn;
