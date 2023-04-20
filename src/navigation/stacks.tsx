import { createNativeStackNavigator } from '~/modules';
import { SignIn, SignUp } from '~/screens';
import { Routes, Stacks } from '~/utils';
import type { PrivateStackParams, PublickStackParams } from '~/utils/types';
import { BottomTabs } from './bottomTabs';

const PublicStack = createNativeStackNavigator<PublickStackParams>();
const PrivateStack = createNativeStackNavigator<PrivateStackParams>();

export const PublicRoutes = (): JSX.Element => (
  <PublicStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <PublicStack.Screen name={Routes.SIGN_IN} component={SignIn} />
    <PublicStack.Screen name={Routes.SIGN_UP} component={SignUp} />
  </PublicStack.Navigator>
);

export const PrivateRoutes = (): JSX.Element => (
  <PrivateStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <PrivateStack.Screen name={Stacks.APP_TABS} component={BottomTabs} />
  </PrivateStack.Navigator>
);
