import { type FC } from 'react';
import { type TouchableOpacityProps } from 'react-native';
import { styled } from '~/modules';
import { Typography } from './Typography';

const Text = styled(Typography)`
  color: #ffffff;
  font-size: 16px;
`;
const Touchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  border-radius: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

type Props = Omit<TouchableOpacityProps, 'onPress'> & {
  onPress?: (props: any) => void;
  children: string;
}
export const Button: FC<Props> = ({ children, onPress, ...props }) => (
  <Touchable activeOpacity={0.8} onPress={onPress} {...props}>
    <Text>{children}</Text>
  </Touchable>
);
