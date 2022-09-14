import { BigNumber } from 'ethers';
import { Box, Flex, Text, Pressable } from 'native-base';
import { TokenBalanceFormatter } from '../../logic/utils';
import { CombinedTokenDataEntry } from '../../logic/models/int_models';
import { Dimensions } from 'react-native';

export const AssetChip = ({
  price,
  decimals,
  balance,
  name,
  icon,
}: CombinedTokenDataEntry) => {
  const marginCalculator = () => {
    const { height } = Dimensions.get('window');
    const tokenName = name.toUpperCase();
    if (tokenName === 'WETH' && height < 800) {
      return 120;
    } else if (tokenName === 'WETH' && height > 800) {
      return 120;
    } else {
      return 0;
    }
  };

  const Coin = icon;
  const theBalance = TokenBalanceFormatter(
    BigNumber.from(balance).toString(),
    decimals
  );

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
                <Text>@ ${price}</Text>
              </Box>
            </Flex>
          </Box>
          <Box marginLeft='15'>
            <Text>
              {theBalance} {name.toUpperCase()}
            </Text>
            <Text bold={true} fontSize='2xl'>
              ${(Number(theBalance) * Number(price)).toFixed(2)}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box marginBottom={marginCalculator()} />
    </Pressable>
  );
};
