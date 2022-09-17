import 'dotenv/config';

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MATIC_RPC_URL = process.env.MATIC_RPC_URL;
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

export default {
  expo: {
    name: 'compass-fi-v1',
    slug: 'compass-fi-v1',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    // runtimeVersion: '1.0.0',
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
        backgroundColor: '#FFFCF5',
      },
      package: 'xyz.compass.fi.compass.wallet.v1',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      ALCHEMY_API_KEY: ALCHEMY_API_KEY,
      MATIC_RPC_URL: MATIC_RPC_URL,
      MUMBAI_RPC_URL: MUMBAI_RPC_URL,
      POSTHOG_API_KEY: POSTHOG_API_KEY,
      SUPABASE_ANON_KEY: SUPABASE_ANON_KEY,
      SUPABASE_URL: SUPABASE_URL,
      eas: {
        projectId: '3dd15df4-c2fe-4c5b-b803-f3cd4f2e8f70',
      },
    },
  },
};
