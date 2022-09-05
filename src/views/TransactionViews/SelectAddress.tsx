import { Text, Box, Input, Pressable } from 'native-base';
import { KeyboardAvoidingView } from 'native-base';
import { TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { QrCode } from '../../../assets/icons';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';

export const SelectAddress = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');
  return (
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
            placeholder='public address (0x)'
            color='white'
            placeholderTextColor='white'
            borderRadius='15'
            // borderColor='transparent'
            fontSize='xs'
            width='90%'
            marginX='auto'
            backgroundColor='primary.300'
          />
          <Box padding={2}>
            <Pressable
              onPress={() => {
                console.log('You clicked the qr code');
              }}
            >
              <QrCode />
            </Pressable>
          </Box>
        </Box>
        <Box marginTop={height < 800 ? 175 : 250} />
        <TxnFlowButton
          payload={() => {
            navigation.navigate('ConfirmTransactionView');
          }}
        />
      </Box>
    </TouchableWithoutFeedback>
  );
};
