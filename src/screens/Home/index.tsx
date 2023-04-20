import { type FC } from 'react';
import { FlatList } from 'react-native';
import {
  Banner,
  ChartOne,
  ChartThree,
  ChartTwo,
  IconDown,
  IconLeave,
  IconSun,
  IconUp,
  IconWind
} from '~/assets';
import { NavigationActions } from '~/services';
import { Routes } from '~/utils';
import Card from './components/Card';
import Header from './components/Header';

import * as S from './styles';

type DataType = 'up' | 'down';

const data = [
  {
    key: 1,
    title: 'Wind Fund',
    type: 'up' as DataType,
    value: 1032.23,
    percent: 3.51,
    TopIcon: <IconWind />,
    MiddleIcon: <ChartOne />,
    BottomIcon: <IconUp />
  },
  {
    key: 2,
    title: 'Solar Fund',
    type: 'down' as DataType,
    value: 986.61,
    percent: 0.13,
    TopIcon: <IconSun />,
    MiddleIcon: <ChartTwo />,
    BottomIcon: <IconDown />
  },
  {
    key: 3,
    title: 'Natural Fund',
    value: 1122.23,
    percent: 3.01,
    type: 'up' as DataType,
    TopIcon: <IconLeave />,
    MiddleIcon: <ChartThree />,
    BottomIcon: <IconUp />
  }
];

const Home: FC = () => {
  const onPress = (): void => {
    NavigationActions.navigate(Routes.DETAILS);
  };

  return (
    <S.Wrapper>
      <Header />

      <S.SectionTitle>Funds</S.SectionTitle>
      <FlatList
        data={data}
        style={{ flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 22 }}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={onPress}
            title={item.title}
            value={item.value}
            percent={item.percent}
            type={item.type}
            TopIcon={item.TopIcon}
            MiddleIcon={item.MiddleIcon}
            BottomIcon={item.BottomIcon}
          />
        )}
      />

      <S.Section>
        <Banner />
      </S.Section>

      <S.VerticalBannerWrapper>
        <S.VerticalBanner>
          <S.BannerTitle>Why should you invest here?</S.BannerTitle>
        </S.VerticalBanner>
        <S.VerticalBanner />
      </S.VerticalBannerWrapper>
    </S.Wrapper>
  );
};

export default Home;
