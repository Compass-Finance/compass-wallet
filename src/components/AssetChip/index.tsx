import { BigNumber } from 'ethers';
import { Box, Flex, Text, Pressable } from 'native-base';
import { TokenBalanceFormatter } from '../../logic/utils';
import { Dimensions } from 'react-native';
import { UserTokenDataResEntry } from '../../logic/models/int_models';
import { AssetsStore } from '../../logic/stores';

export const AssetChip = ({
  price,
  id,
  // decimals,
  HRNativeBalance,
  HRUSDBalance,
  name,
  svg,
}: UserTokenDataResEntry) => {
  const marginCalculator = () => {
    if (id === AssetsStore.tokenDataArr.length - 1) {
      return 120;
    } else {
      return 0;
    }
  };

  const Coin = svg;

  // first you'll want to render the item behind

  return (
    <Pressable onPress={() => {}}>
      <Box bgColor='white' shadow={'6'} borderRadius={10} margin={15}>
        <Flex>
          <Box
            marginLeft='15'
            marginTop='15'
            marginRight='15'
            marginBottom='3'
            minWidth='90%'
          >
            <Flex flexDir='row'>
              <Coin height='50px' width='50px' />
              <Box marginLeft='15'>
                <Text fontSize='lg' fontWeight='bold'>
                  {name.toUpperCase()}
                </Text>
                <Text>@ ${price.toFixed(2)}</Text>
              </Box>
            </Flex>
          </Box>
          <Box marginLeft='15'>
            <Text>
              {HRNativeBalance} {name.toUpperCase()}
            </Text>
            <Text bold={true} fontSize='2xl'>
              ${Number(HRUSDBalance).toFixed(2)}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box marginBottom={marginCalculator()} />
    </Pressable>
  );
};
