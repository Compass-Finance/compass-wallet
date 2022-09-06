import { Center, View, Text, Button } from 'native-base';
import { useEffect } from 'react';
import { deleteItemAsync } from 'expo-secure-store';
import { loadedWalletActions } from '../../logic/actions';
import { setString } from 'expo-clipboard';
import { LoadedWalletStore } from '../../logic/stores';

export const HomeView = () => {
  useEffect(() => {
    const something = async () => {
      if (LoadedWalletStore.walletHasBeenLoaded === false) {
        await loadedWalletActions.loadWallet('mumbai');
      }
    };
    something();
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Home View </Text>
        <Button
          onPress={() => {
            setString(LoadedWalletStore.wallet.address);
            console.log(LoadedWalletStore.wallet.address);
          }}
        >
          Get Address
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
