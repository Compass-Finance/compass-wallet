import { Text, View, Box } from 'native-base';
import { Dimensions } from 'react-native';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';

export const ConfirmTransaction = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');
  return (
    <Box safeAreaTop safeAreaBottom backgroundColor='primary.100' height='full'>
      <TxnBackButton
        payload={() => {
          navigation.navigate('SelectAddressView');
        }}
      />
      <Text
        lineHeight={60}
        padding='0'
        marginTop='5'
        fontSize='3xl'
        color='white'
        textAlign='center'
        fontWeight='bold'
      >
        Transaction Overview
      </Text>

      <Box
        borderRadius='18'
        backgroundColor='primary.300'
        marginTop='25'
        // height='100'
        padding='5'
        marginX='5'
      >
        <Text
          paddingTop='25'
          paddingBottom='15'
          fontWeight='semibold'
          color='white'
          fontSize='xl'
        >
          Amount: 54.32 DAI / 53.24 USD
        </Text>
        <Text fontWeight='semibold' color='white' fontSize='xl'>
          To: 0xB...D9C9
        </Text>
        <Text
          paddingBottom={25}
          color='white'
          fontWeight='bold'
          fontSize={height < 800 ? '2xs' : 'xs'}
        >
          0xB8d382c1696e93f641008Da345991E967922D9C9
        </Text>
      </Box>
      <Box height={height < 800 ? 220 : 350} />
      <TxnFlowButton
        text='Send Transaction'
        payload={() => {
          navigation.navigate('TransactionSent');
        }}
        fontSize='lg'
        width='210'
      />
    </Box>
  );
};
