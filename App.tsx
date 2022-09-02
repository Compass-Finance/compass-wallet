import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Text } from 'native-base';
import { MasterStackRouter } from './src/routers/MasterRouter';
import { extendTheme, NativeBaseProvider, View } from 'native-base';
// import { Raleway_400Regular } from '@expo-google-fonts/raleway';
// import { useFonts, loadAsync } from 'expo-font';
import { useCallback, useEffect } from 'react';
import { useFonts, loadAsync } from 'expo-font';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';

// import {
//   Archivo_400Regular,
//   Archivo_500Medium,
//   Archivo_600SemiBold,
//   Archivo_700Bold,
//   Archivo_800ExtraBold,
// } from '@expo-google-fonts/archivo';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({
  // fonts: {
  //   heading: 'Raleway-Regular',
  //   body: 'Raleway-Regular',
  //   mono: 'Raleway',
  // },
  // fontConfig: {
  //   Raleway: {
  //     400: {
  //       normal: 'Raleway-Regular',
  //     },
  //   },
  // },
  colors: {
    primary: {
      100: '#FF8989',
    },
    secondary: {
      100: '#FFCC81',
    },
    background: {
      100: '#FFF5DA',
    },
  },
  config,
});
type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  // const loadFont = async () => {
  //   await loadAsync({
  //     'Raleway-Regular': Raleway_400Regular,
  //   });
  // };
  // const fontsLoaded = new Promise((resolve, reject) => {
  //   try {
  //     const something = loadFont();
  //     resolve(something);
  //   } catch (e) {
  //     reject(e);
  //   }
  // });

  // if (!fontsLoaded) {
  //   return <Text>plz wait</Text>;
  // }

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NativeBaseProvider theme={theme}>
      {/* <View onLayout={onLayoutRootView}> */}
      <StatusBar style='dark' />
      <MasterStackRouter />
      {/* </View> */}
    </NativeBaseProvider>
  );
}
