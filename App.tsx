import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { useEffect, useState } from 'react';
import { loadedWalletActions } from './src/logic/actions';
import { MasterStackRouter } from './src/routers/MasterRouter';
import { extendTheme, NativeBaseProvider, View } from 'native-base';
import { getValueFor } from './src/logic/utils';
import { authenticateAsync } from 'expo-local-authentication';
import { Locked } from './src/views/MiscViews/Locked';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#FF8989',
      200: '#FFA1A1',
      300: '#FFAAAA',
    },
    secondary: {
      100: '#FFCC81',
    },
    background: {
      100: '#FFFCF5', // OG VAL #FFF5DA, PAST VAL #FEFAED
    },
  },
  config,
});

type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState<null | boolean>(null);

  useEffect(() => {
    const loadWalletIfNeeded = async () => {
      const pk = await getValueFor('pk');
      // const realPk = await getValueFor('realPk');
      if (pk !== '') {
        await authenticateAsync().then(async (value) => {
          setIsUnlocked(false);
          if (value.success === true) {
            setIsUnlocked(true);
            await loadedWalletActions.loadWallet('mumbai');
          } else {
            setIsUnlocked(false);
          }
        });
      }
    };
    loadWalletIfNeeded();
  }, []);

  if (isUnlocked === false) {
    return (
      <NativeBaseProvider theme={theme}>
        <StatusBar style='dark' />
        <Locked />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <StatusBar style='dark' />
        <MasterStackRouter />
      </NativeBaseProvider>
    );
  }
}
