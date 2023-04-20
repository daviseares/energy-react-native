import { Typography } from '~/components';
import { styled } from '~/modules';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-top: 120px;
  align-items: center;
  padding-horizontal: 22px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Text = styled(Typography)`
  opacity: 0.4;
`;

export const TextWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Underline = styled(Typography)`
  text-decoration: underline;
  opacity: 0.4;
`;
