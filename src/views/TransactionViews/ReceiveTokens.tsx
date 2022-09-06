import { IAssetsNavProps } from '../../logic/models/int_models';
import { Box, Text, Center, Button } from 'native-base';
import { TxnBackButton } from '../../components/TxnBackButton';
// @ts-ignore
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { LoadedWalletStore } from '../../logic/stores';
import { Dimensions } from 'react-native';
import { setString } from 'expo-clipboard';
import { Toast, useToast } from 'native-base';
import { wait } from '../../logic/utils';

export const ReceiveTokens = ({ navigation }: IAssetsNavProps) => {
  const toast = useToast();
  const userAddress = LoadedWalletStore.wallet.address;
  const { height, width } = Dimensions.get('window');
  return (
    <Box safeAreaTop safeAreaBottom backgroundColor='primary.100' height='full'>
      <TxnBackButton
        payload={() => {
          navigation.navigate('HomeTabRouter');
        }}
      />
      <Center width='100%'>
        <Box marginTop={height < 800 ? 75 : 150} />
        <QRCode
          color='white'
          content={userAddress}
          //   size='300'
          width={300}
          height={300}
        />
        <Text color='white' fontSize='md'>
          Scan this to receive Payment
        </Text>
        <Box marginBottom={height < 800 ? 95 : 150} />

        <Box
          //   height='30'
          borderRadius={18}
          paddingY='1'
          paddingX='3'
          width='70%'
          //   width='60%'
          backgroundColor='primary.300'
          display='flex'
          //   marginX='5'

          flexDirection='row'
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text marginRight='5' color='white'>
            {`${userAddress.substring(0, 8)}...${userAddress.substring(
              33,
              42
            )}`}
          </Text>
          <Button
            onPress={() => {
              setString(`${userAddress}`);
              toast.show({
                title: 'Address Copied',
                placement: 'bottom',
              });
              wait(1000).then(() => {
                toast.closeAll();
              });
            }}
            borderRadius={25}
            padding='0'
            backgroundColor='transparent'
            borderWidth='2'
            borderColor='white'
          >
            <Text paddingY='1' paddingX='2' color='white'>
              Copy
            </Text>
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
