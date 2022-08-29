import { Center, View, Text } from 'native-base';
import { useEffect } from 'react';
import { CoinGeckoPriceGetter } from '../logic/services';

export const AssetsView = () => {
  useEffect(() => {
    CoinGeckoPriceGetter();
  }, []);
  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Assets View</Text>
      </Center>
    </View>
  );
};
