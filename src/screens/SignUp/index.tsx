import { type FC, useState } from 'react';
import { Button, Header, TextInput, Touchable } from '~/components';
import { Formik, useDispatch } from '~/modules';
import { NavigationActions } from '~/services';
import { addUser } from '~/stores/user/user.slice';
import { Routes, useAlerts } from '~/utils';
import { type FormValues, initialValues, validationSchema } from './form';
import * as S from './styles';
import { Wrapper } from './styles';

const SignUp: FC = () => {
  const { showError, showSuccess } = useAlerts();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const navigateToSignUp = (): void => {
    NavigationActions.navigate(Routes.SIGN_UP);
  };

  const onPressCheck = (): void => {
    setChecked((checked) => !checked);
  };

  const onCreateAccount = (values: FormValues): void => {
    if (checked) {
      dispatch(addUser(values));
      NavigationActions.goBack();
      showSuccess('Account created successfully');
    } else {
      showError('You must agree to the terms of service');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onCreateAccount}
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
        <>
          <Header
            goBack={() => {
              NavigationActions.goBack();
            }}
          />
          <Wrapper>
            <S.Title>Create your account</S.Title>

            <TextInput
              label="First Name"
              placeholder="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              error={touched && errors.firstName}
            />
            <TextInput
              label="Last Name"
              placeholder="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              error={touched && errors.lastName}
            />
            <TextInput
              label="E-mail"
              placeholder="E-mail"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched && errors.email}
            />
            <TextInput
              label="Password"
              secret
              placeholder="Minimum 8 characters"
              value={values.password}
              error={touched && errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />

            <S.CheckWrapper>
              <S.Checkbox
                value={checked}
                color="#681ED2"
                onValueChange={onPressCheck}
              />

              <S.Text>
                {
                  ' I am over 18 years of age and I have read and \n agree to the '
                }
                <S.Bold>Terms of Service</S.Bold>
                {' and '}
                <S.Bold>Privacy Policy</S.Bold>
              </S.Text>
            </S.CheckWrapper>

            <Button onPress={handleSubmit}>Create account</Button>

            <S.TextWrapper>
              <S.Text>{'Already have an account? '}</S.Text>
              <Touchable onPress={navigateToSignUp}>
                <S.Underline>Log in here</S.Underline>
              </Touchable>
            </S.TextWrapper>
          </Wrapper>
        </>
      )}
    </Formik>
  );
};

export default SignUp;
