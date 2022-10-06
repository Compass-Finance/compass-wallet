import { Center, View, Text, Button } from 'native-base';
import { useEffect } from 'react';
import { deleteItemAsync } from 'expo-secure-store';
import { loadedWalletActions } from '../../logic/actions';
import { setString } from 'expo-clipboard';
import { LoadedWalletStore } from '../../logic/stores';
import { supabase } from '../../logic/services';
// import { CoinGeckoPriceGetter } from '../../logic/services/deprecated/Coingecko.service';
import { alchemyTokenBalanceGetter } from '../../logic/services/deprecated/AlchemyTokenBalance.service';
import { Dimensions } from 'react-native';
// import { androidEdgeFunctionGetter } from '../../logic/services';

export const HomeView = () => {
  const { height } = Dimensions.get('window');
  useEffect(() => {
    const something = async () => {
      if (LoadedWalletStore.walletHasBeenLoaded === false) {
        await loadedWalletActions.loadWallet('mumbai');
      }
    };
    // supabase.functions.invoke('');
    something();
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text></Text>
        <Button
          onPress={async () => {
            alert(height);
          }}
        >
          Get Screen Height
        </Button>
        <Button
          onPress={async () => {
            await deleteItemAsync('pk');
          }}
        >
          Delete PK
        </Button>
      </Center>
    </View>
  );
};
