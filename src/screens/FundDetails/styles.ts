import { Touchable, Typography, Button as _Button } from '~/components';
import { styled } from '~/modules';

export const Wrapper = styled.ScrollView.attrs({
  bounces: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100
  }
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 26px;
  padding: 22px;
`;

export const TopText = styled(Typography).attrs({
  variant: 'semibold'
})`
  font-size: 24px;
`;

export const BottomText = styled(Typography)`
  color: #a0a0a0;
`;

export const GrowText = styled(Typography)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const SectionTitle = styled(Typography).attrs({
  variant: 'semibold'
})`
  margin-top: 40px;
  margin-left: 22px;
  font-size: 17px;

  align-self: flex-start;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 22px;
  margin-bottom: 10px;
`;

export const ButtonSell = styled(Touchable)`
  width: 163px;
  height: 47px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #00000020;
`;

export const SellText = styled(Typography)`
  font-size: 17px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ButtonRetire = styled(Touchable)`
  width: 163px;
  height: 47px;
  background-color: ${(props) => props.theme.colors.secondary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const RetireText = styled(Typography).attrs({
  variant: 'medium'
})`
  font-size: 17px;
  color: ${(props) => props.theme.colors.background};
`;

export const WarningText = styled(BottomText)`
  font-size: 12px;
  align-self: flex-start;
  margin-left: 22px;
`;

export const Button = styled(_Button)`
  width: 310px;
  height: 55px;
`;

export const Disclaimer = styled.View`
  background: #f4f4f4;
  margin: 22px 22px;
  border-radius: 5px;
`;

export const DisclaimerText = styled(Typography)`
  color: #a0a0a0;
  font-size: 12px;
  padding: 10px;
`;

export const Image = styled.Image``;
