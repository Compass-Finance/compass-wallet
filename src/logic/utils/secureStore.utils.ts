import { setItemAsync, getItemAsync } from 'expo-secure-store';

export const save = async (key: string, value: string) => {
  await setItemAsync(key, value);
};

export const getValueFor = async (key: string): Promise<string> => {
  let result = await getItemAsync(key);
  if (result) {
    return result;
  } else {
    return '';
  }
};
