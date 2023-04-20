import { type FC } from 'react';
import { View } from 'react-native';
import * as S from './styles';

type Props = {
  title: string;
  value: number;
  type: 'up' | 'down';
  percent: number;
  TopIcon: JSX.Element;
  MiddleIcon: JSX.Element;
  BottomIcon: JSX.Element;
  onPress?: () => void;
};

const Card: FC<Props> = ({
  TopIcon,
  MiddleIcon,
  BottomIcon,
  title,
  value,
  percent,
  type,
  onPress
}) => (
  <S.Card onPress={onPress}>
    <View>
      {TopIcon}
      <S.CardTitle>{title}</S.CardTitle>
    </View>
    {MiddleIcon}
    <S.DataWrapper>
      <S.ValueText>{`$${value}`}</S.ValueText>
      <S.PercentageText type={type}>
        {BottomIcon}
        {` ${percent}%`}
      </S.PercentageText>
    </S.DataWrapper>
  </S.Card>
);

export default Card;
