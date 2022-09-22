import { StatusBar } from 'expo-status-bar';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { useEffect, useState } from 'react';
import { loadedWalletActions } from './src/logic/actions';
import { MasterStackRouter } from './src/routers/MasterRouter';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { getValueFor, wait } from './src/logic/utils';
import { authenticateAsync, hasHardwareAsync } from 'expo-local-authentication';
import { Locked } from './src/views/MiscViews/Locked';
import { PostHogProvider } from 'posthog-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

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
      100: '#FFFCF5',
    },
  },
  config,
});

type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  const [_, setbiometricIsSupported] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState<null | boolean>(null);

  const onAuthenticate = () => {
    const auth = authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Passcode',
    });
    auth.then(async (result) => {
      setIsUnlocked(result.success);
      if (result.success === true) {
        await loadedWalletActions.loadWallet('mumbai');
        console.log('success wallet loaded');
      }
      console.log(result);
    });
  };

  useEffect(() => {
    const loadWalletIfNeeded = async () => {
      const pk = await getValueFor('pk');
      if (pk !== '') {
        if (process.env.NODE_ENV === 'development') {
          setIsUnlocked(true);
          return;
        }
        setIsUnlocked(false);
        (async () => {
          const compatible = await hasHardwareAsync();
          setbiometricIsSupported(compatible);
        })();
      } else {
        setIsUnlocked(true);
      }
    };
    loadWalletIfNeeded();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <PostHogProvider
          apiKey={Constants.manifest?.extra?.POSTHOG_API_KEY}
          autocapture={{
            captureTouches: true, // If you don't want to capture touch events set this to false
            captureLifecycleEvents: true, // If you don't want to capture the Lifecycle Events (e.g. Application Opened) set this to false
            captureScreens: true, // If you don't want to capture screen events set this to false
            customLabelProp: 'ph-label',
            noCaptureProp: 'ph-no-capture',
          }}
        >
          <StatusBar style='dark' />
          {isUnlocked === true ? (
            <MasterStackRouter />
          ) : (
            <Locked authPayload={onAuthenticate} />
          )}
        </PostHogProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
