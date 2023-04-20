import { Typography } from '~/components';
import { Checkbox as _Checkbox, styled } from '~/modules';

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 26
  }
})`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Title = styled(Typography)`
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Text = styled(Typography)`
  color: grey;
  font-size: 13px;
`;

export const TextWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Underline = styled(Typography)`
  text-decoration: underline;
  opacity: 0.8;
`;

export const Bold = styled(Typography)`
  opacity: 1;
  font-size: 13px;
`;

export const CheckWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const Checkbox = styled(_Checkbox)`
margin-right: 3px;
`;
