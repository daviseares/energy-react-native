import { type FC } from 'react';
import { View } from 'react-native';
import { FullChart, Highlighted, IconPie, IconUp } from '~/assets';
import { Header } from '~/components';
import { NavigationActions } from '~/services';
import InfoStats from './components/InfoStats';
import * as S from './styles';

const FundDetails: FC = () => {
  return (
    <S.Wrapper>
      <Header
        title="Wind Fund"
        subtitle="WFND"
        goBack={() => {
          NavigationActions.goBack();
        }}
      />
      <S.TopWrapper>
        <View>
          <S.TopText>$18.23</S.TopText>
          <S.GrowText>
            <IconUp />
            {' 3.51%($1.21)'}
          </S.GrowText>
        </View>

        <S.TopText>2022</S.TopText>
      </S.TopWrapper>

      <FullChart />

      <InfoStats />

      <S.Image source={Highlighted} />

      <S.SectionTitle>
        <IconPie color="#000" />
        {' Your Portfolio'}
      </S.SectionTitle>

      <S.TopWrapper>
        <View>
          <S.TopText>18 credits</S.TopText>
          <S.GrowText>
            <IconUp />
            {' 8.41%'}
          </S.GrowText>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <S.TopText>$328.14</S.TopText>
          <S.BottomText>Last Purchase 28d ago</S.BottomText>
        </View>
      </S.TopWrapper>

      <S.ButtonWrapper>
        <S.ButtonSell>
          <S.SellText>Sell</S.SellText>
        </S.ButtonSell>
        <S.ButtonRetire>
          <S.RetireText>Retire credits</S.RetireText>
        </S.ButtonRetire>
      </S.ButtonWrapper>
      <S.WarningText>
        You’ve previously retired 28 credits of this asset
      </S.WarningText>

      <S.Disclaimer>
        <S.DisclaimerText>
         {'Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.'}
         {'\n \nThe information provided is  not investment advice, and should not be used as a recommendation to buy or sell assets.'}
        </S.DisclaimerText>
      </S.Disclaimer>

      <S.Button>Buy</S.Button>
    </S.Wrapper>
  );
};

export default FundDetails;
