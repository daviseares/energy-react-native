import { ifIphoneX } from 'react-native-iphone-x-helper';
import { IconHome, IconPie, IconTrade } from '~/assets';
import {
  createBottomTabNavigator,
  createNativeStackNavigator,
  moderateScale
} from '~/modules';
import { FundDetails, Home, Portfolio, Trade } from '~/screens';
import { Routes } from '~/utils';

const BottomTab = createBottomTabNavigator();
const HomeTabs = createNativeStackNavigator();

const _Home = (): JSX.Element => (
  <HomeTabs.Navigator screenOptions={{ headerShown: false }}>
    <HomeTabs.Screen name={'_Home'} component={Home} />
    <HomeTabs.Screen name={Routes.DETAILS} component={FundDetails} />
  </HomeTabs.Navigator>
);

export const BottomTabs = (): JSX.Element => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#681ED2',
      tabBarInactiveTintColor: '#222222',
      headerShown: false,
      tabBarShowLabel: false,
      tabBarLabelStyle: {
        backgroundColor: 'red'
      },
      tabBarItemStyle: {
        height: 45,
        borderRadius: 20
      },
      tabBarStyle: {
        borderTopColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: ifIphoneX(moderateScale(30), moderateScale(15)),
        left: 50,
        right: 50,
        height: moderateScale(42),
        borderRadius: 55,
        paddingHorizontal: moderateScale(12),
        elevation: 3,
        shadowColor: '#bfbfc0',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.3,
        shadowRadius: 16
      }
    }}
  >
    <BottomTab.Screen
      name={Routes.HOME}
      component={_Home}
      options={{
        tabBarIcon: ({ color }) => <IconHome color={color} />
      }}
    />
    <BottomTab.Screen
      name={Routes.TRADE}
      component={Trade}
      options={{
        tabBarIcon: ({ color }) => <IconTrade color={color} />
      }}
    />
    <BottomTab.Screen
      name={Routes.PORTFOLIO}
      component={Portfolio}
      options={{
        tabBarIcon: ({ color }) => <IconPie color={color} />
      }}
    />
  </BottomTab.Navigator>
);
