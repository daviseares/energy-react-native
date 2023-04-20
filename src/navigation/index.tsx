import { type FC } from 'react';
import { NavigationContainer, createNativeStackNavigator, isEmpty } from '~/modules';
import { setTopLevelNavigator } from '~/services';
import { Stacks } from '~/utils';
import { PrivateRoutes, PublicRoutes } from './stacks';

const MainStack = createNativeStackNavigator();

type Props = {
  token: string | null;
};

export const AppRoutes: FC<Props> = ({ token }) => {
  const initialRouteName = !isEmpty(token) ? Stacks.PRIVATE : Stacks.PUBLIC;

  return (
  <NavigationContainer ref={setTopLevelNavigator}>
    <MainStack.Navigator initialRouteName={initialRouteName} screenOptions={{
      headerShown: false
    }}>
      <MainStack.Screen name={Stacks.PUBLIC} component={PublicRoutes} />
      <MainStack.Screen name={Stacks.PRIVATE} component={PrivateRoutes} />
    </MainStack.Navigator>
  </NavigationContainer>
  );
};
