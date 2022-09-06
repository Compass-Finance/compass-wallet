import { Text, Box, Input, Pressable } from 'native-base';
import { TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { QrCode } from '../../../assets/icons';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { useState } from 'react';
import { requestPermissionsAsync } from 'expo-barcode-scanner';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet } from 'react-native';
import { utils } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import { newTxnActions } from '../../logic/actions';
import newTxnStore from '../../logic/stores/newTxn.store';

export const SelectAddress = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');

  const [_, setHasPermission] = useState<boolean | null>(null);
  const [scannedText, setScannedText] = useState('');
  const [wantsToScan, setWantsToScan] = useState(false);
  const [scanned, setScanned] = useState(false);
  const getBarCodeScannerPermissions = async () => {
    const { status } = await requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ _, data }: any) => {
    setScanned(true);
    setScannedText(data);
  };

  if (wantsToScan === true && scanned === false) {
    return (
      <Box height='full' width='full' safeAreaTop safeAreaBottom>
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        <Text color='white'></Text>
      </Box>
    );
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box
          safeAreaTop
          safeAreaBottom
          backgroundColor='primary.100'
          height='full'
        >
          <TxnBackButton
            payload={() => {
              navigation.navigate('SelectAmountView');
            }}
          />
          <Text
            lineHeight={60}
            padding='0'
            marginTop='5'
            fontSize='5xl'
            color='white'
            textAlign='center'
            fontWeight='bold'
          >
            TO:
          </Text>
          <Box
            // 0xB8d382c1696e93f641008Da345991E967922D9C9
            display='flex'
            flexDirection='row'
            bgColor='primary.300'
            width='90%'
            marginX='auto'
            marginTop={height < 800 ? 200 : 250}
            borderRadius={15}

            // marginX='auto'
          >
            <Input
              // marginLeft={100}
              // height='45'
              borderWidth={0}
              defaultValue={scannedText}
              placeholder='public address (0x)'
              color='white'
              placeholderTextColor='white'
              borderRadius='15'
              onChangeText={(text: string) => {
                setScannedText(text);
              }}
              // borderColor='transparent'
              fontSize='xs'
              width='90%'
              marginX='auto'
              backgroundColor='primary.300'
            />
            <Box padding={2}>
              <Pressable
                onPress={async () => {
                  await getBarCodeScannerPermissions();
                  setWantsToScan(true);
                  console.log('You clicked the qr code');
                }}
              >
                <QrCode />
              </Pressable>
            </Box>
          </Box>
          <Box marginTop={height < 800 ? 175 : 250} />
          <TxnFlowButton
            disabled={!isAddress(scannedText)}
            payload={() => {
              navigation.navigate('ConfirmTransactionView');
              newTxnStore.setTxnReadyAddress(scannedText);
            }}
          />
        </Box>
      </TouchableWithoutFeedback>
    </>
  );
};
