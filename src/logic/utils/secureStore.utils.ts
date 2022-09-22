import {
  setItemAsync,
  getItemAsync,
  ALWAYS_THIS_DEVICE_ONLY,
} from 'expo-secure-store';

export const save = async (key: string, value: string) => {
  ALWAYS_THIS_DEVICE_ONLY;
  await setItemAsync(key, value);
};

export const getValueFor = async (key: string): Promise<string> => {
  let result = await getItemAsync(key, { requireAuthentication: true });
  if (result) {
    return result;
  } else {
    return '';
  }
};
