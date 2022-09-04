import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { MasterStackRouter } from './src/routers/MasterRouter';
import { extendTheme, NativeBaseProvider, View } from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#FF8989',
      200: '#FFA1A1',
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
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='dark' />
      <MasterStackRouter />
    </NativeBaseProvider>
  );
}
