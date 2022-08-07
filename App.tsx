import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { MasterStackRouter } from './src/routers/MasterRouter';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { ethers } from 'ethers';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({
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
  const wallet = ethers.Wallet.createRandom();

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='dark' />
      <MasterStackRouter />
    </NativeBaseProvider>
  );
}
