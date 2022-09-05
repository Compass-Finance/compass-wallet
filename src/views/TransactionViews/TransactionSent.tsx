import { Box, Text } from 'native-base';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { FilledCheckmark } from '../../../assets/icons';
import { Dimensions } from 'react-native';

export const TransactionSent = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');

  return (
    <Box safeAreaTop safeAreaBottom backgroundColor='primary.100' height='full'>
      <Box paddingLeft={height < 800 ? 7 : 10} paddingTop='10'>
        <FilledCheckmark width='50px' height='50px' />
      </Box>
      <Box
      //   backgroundColor='black'
      >
        <Text
          lineHeight={25}
          padding='0'
          marginTop='5'
          fontSize='2xl'
          color='white'
          textAlign='center'
          fontWeight='bold'
        >
          Your Funds are on their way.
        </Text>
      </Box>
      <Text
        paddingLeft={height < 800 ? 8 : 12}
        paddingY='5'
        color='white'
        fontWeight='semibold'
        fontSize='md'
      >
        It should go through in 20-30 seconds
      </Text>
      <Box marginY={height < 800 ? 180 : 250} />
      <TxnFlowButton
        text='Go Home'
        fontSize='md'
        width='180'
        payload={() => {
          navigation.navigate('HomeTabRouter');
        }}
      />
    </Box>
  );
};
