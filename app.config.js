import 'dotenv/config';

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MATIC_RPC_URL = process.env.MATIC_RPC_URL;
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL;
const GANACHE_ACCT_1_PK = process.env.GANACHE_ACCT_1_PK;
const GANACHE_ACCT_2_PK = process.env.GANACHE_ACCT_2_PK;
const ETH_DEV_PK = process.env.ETH_DEV_PK;

export default {
  expo: {
    name: 'compass-fi-v1',
    slug: 'compass-fi-v1',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    runtimeVersion: '1.0.0',
    updates: {
      // fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/3dd15df4-c2fe-4c5b-b803-f3cd4f2e8f70',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      // runtimeVersion: '1.0.0',
      supportsTablet: true,
      bundleIdentifier: 'xyz.compass.fi.compass.wallet.v1',
    },
    android: {
      // runtimeVersion: '1.0.0',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'xyz.compass.fi.compass.wallet.v1',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      MUMBAI_RPC_URL: MUMBAI_RPC_URL,
      MATIC_RPC_URL: MATIC_RPC_URL,
      ALCHEMY_API_KEY: ALCHEMY_API_KEY,
      GANACHE_RPC_URL: GANACHE_RPC_URL,
      GANACHE_ACCT_1_PK: GANACHE_ACCT_1_PK,
      GANACHE_ACCT_2_PK: GANACHE_ACCT_2_PK,
      ETH_DEV_PK: ETH_DEV_PK,
      eas: {
        projectId: '3dd15df4-c2fe-4c5b-b803-f3cd4f2e8f70',
      },
    },
  },
};
