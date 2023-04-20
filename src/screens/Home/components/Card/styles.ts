import { Touchable, Typography } from '~/components';
import { styled } from '~/modules';

export const Card = styled(Touchable)`
  width: 140px;
  height: 145px;
  border: 1px solid #00000020;
  border-radius: 5px;
  padding: 12px;
  justify-content: space-between;
  margin-right: 15px;
`;

export const CardTitle = styled(Typography).attrs({ variant: 'semibold' })`
  font-size: 12px;
  margin-top: 7px;
`;

export const DataWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ValueText = styled(Typography)`
 font-size: 13px;
`;

type PercentageTextProps = {
  type: 'up' | 'down';
};
export const PercentageText = styled(Typography)<PercentageTextProps>`
  color: ${({ theme, type }) => type === 'up' ? theme.colors.secondary : theme.colors.error};
  font-size: 13px;
`;
