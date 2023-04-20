import { Touchable, Typography } from '~/components';
import { getStatusBarHeight, styled } from '~/modules';

export const ProfileCircle = styled.View`
  background-color: ${props => props.theme.colors.tertiary};
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const MidWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 20}px;
  padding-horizontal: 22px;
  border-bottom-width: 1px;
  border-bottom-color: #00000010;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
`;

export const TextAccount = styled(Typography).attrs({ variant: 'medium' })``;

export const Balance = styled(TextAccount)``;

export const PortfolioText = styled(Typography)`
  font-size: 12px;
`;

export const IncomeWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const IncomeText = styled(Typography).attrs({ variant: 'semibold' })`
  font-size: 22px;
`;

export const RevenueText = styled(Typography)`
  margin-left: 5px;
  color: ${props => props.theme.colors.secondary};
`;

export const ButtonEarn = styled(Touchable)`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary}15;
`;

export const EarnText = styled(Typography).attrs({
  variant: 'semibold'
})`
  color: ${props => props.theme.colors.primary};
  margin-left: 5px;
  font-size: 13px;
`;
