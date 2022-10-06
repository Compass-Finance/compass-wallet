import axios from 'axios';
import { LoadedWalletStore } from '../stores';
import Constants from 'expo-constants';

export const invokeEdgeFunction = async (
  funcName: string,
  params: Object
) => {
  const response = await axios.post(
    `https://${Constants.manifest?.extra?.SUPABASE_PROJECT_ID}.functions.supabase.co/${funcName}`,
    JSON.stringify(params),
    {
      headers: {
        Authorization: `Bearer ${Constants.manifest?.extra?.SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response.data;
};
