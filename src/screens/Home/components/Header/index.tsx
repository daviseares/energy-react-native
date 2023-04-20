import { type FC } from 'react';
import { View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { IconCoin, IconPerson, IconUp } from '~/assets';
import * as S from './styles';

const Header: FC = () => (
  <S.Header>
    <S.Row>
      <S.ProfileCircle>
        <IconPerson />
      </S.ProfileCircle>

      <S.MidWrapper>
        <S.TextAccount>{'Account: '}</S.TextAccount>
        <S.Balance>$1,457.23 </S.Balance>
        <Octicons name="chevron-down" size={16} />
      </S.MidWrapper>

      <Octicons name="bell" size={20} />
    </S.Row>

    <S.Row>
      <View>
        <S.PortfolioText>Portfolio</S.PortfolioText>
        <S.IncomeWrapper>
          <S.IncomeText>$1,245.23</S.IncomeText>

          <S.RevenueText>
            <IconUp />
           {' 31.82%'}
          </S.RevenueText>
        </S.IncomeWrapper>
      </View>

      <S.ButtonEarn>
        <IconCoin />
        <S.EarnText>Earn Rewards</S.EarnText>
      </S.ButtonEarn>
    </S.Row>
  </S.Header>
);

export default Header;
