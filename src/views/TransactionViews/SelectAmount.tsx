import { Box, Center, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { NumberPad } from '../../components/NumberPad';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';
// import NumberPad, { Display, Input } from 'react-native-numpad';

export const SelectAmount = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');
  return (
    <Box
      safeAreaTop={true}
      safeAreaBottom={true}
      backgroundColor='primary.100'
      height='full'
      // width='100%'
    >
      <TxnBackButton
        payload={() => {
          navigation.navigate('HomeTabRouter');
        }}
      />
      <Center>
        <Box
          display='flex'
          alignItems='center'
          marginTop={height < 800 ? 10 : 100}
          marginBottom='30'
        >
          <Text
            lineHeight={30}
            opacity={75}
            fontSize='3xl'
            color='white'
            fontWeight='bold'
          >
            0 USD
          </Text>
          <Text
            lineHeight={60}
            padding='0'
            margin='0'
            fontSize='6xl'
            color='white'
            fontWeight='bold'
          >
            0 DAI
          </Text>
        </Box>
        <NumberPad />
        <Box marginTop={47} />
        <TxnFlowButton
          payload={() => {
            navigation.navigate('SelectAddressView', {});
          }}
        />
      </Center>
    </Box>
  );
};
