import { useEffect, useState } from 'react';
import {
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  useFonts
} from '@expo-google-fonts/sora';
import { Logs } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, PersistGate, Provider } from '~/modules';
import { AppRoutes } from '~/navigation';
import { persistor, store } from '~/stores';
import { ThemeProvider } from './src/theme';

Logs.enableExpoCliLogging();

export default function App (): JSX.Element | null {
  const [token, setToken] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold
  });

  const getToken = async (): Promise<void> => {
    const item = await AsyncStorage.getItem('user:token');

    setToken(item);
  };

  useEffect(() => {
    getToken();
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <StatusBar style="auto" />
          <AppRoutes token={token} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
