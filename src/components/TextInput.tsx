import { type FC } from 'react';
import { type TextInputProps } from 'react-native';
import { isEmpty, styled } from '~/modules';
import { Typography } from './Typography';

const Wrapper = styled.View`
  width: 100%;
  padding-bottom: 20px;
`;

const Input = styled.TextInput``;

const InputWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.tertiary};
  justify-content: center;
  height: 50px;
  border-radius: 5px;
  padding-left: 10px;
`;

const Label = styled(Typography)`
  align-self: flex-start;
  padding-bottom: 5px;
  opacity: 0.3;
`;

const Error = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`;

type Props = TextInputProps & {
  label: string;
  secret?: boolean;
  error?: string;
}

export const TextInput: FC<Props> = ({ label, secret = false, error, ...props }) => (
  <Wrapper>
    <Label>{label}</Label>
    <InputWrapper>
      <Input secureTextEntry={secret} {...props} />
    </InputWrapper>
    {!isEmpty(error) && <Error>{error}</Error>}
  </Wrapper>
);
