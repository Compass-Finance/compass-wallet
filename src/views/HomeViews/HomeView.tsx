import { Center, View, Text, Button, Box, Pressable } from 'native-base';
import { useEffect } from 'react';
import { loadedWalletActions } from '../../logic/actions';
import { LoadedWalletStore } from '../../logic/stores';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IHomeViewProps } from '../../logic/models/int_models';

// now we're going to want to

export const HomeView = ({ navigation }: IHomeViewProps) => {
  // const { height } = Dimensions.get('window');
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
        <Box backgroundColor='primary.100' borderRadius={10}>
          <Pressable
            onPress={() => {
              navigation.navigate('HomeTools');
              console.log('Hi I was pressed');
            }}
          >
            <MaterialCommunityIcons
              name='hammer-wrench'
              size={170}
              color='black'
            />
          </Pressable>
        </Box>
        {/* <Button
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
        </Button> */}
      </Center>
    </View>
  );
};
