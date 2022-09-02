import { BigNumber } from 'ethers';
import { Box, Flex, Text, Spacer } from 'native-base';

import { CombinedTokenDataEntry } from '../../logic/models/int_models';
import { TokenBalanceFormatter } from '../../logic/utils';
export const AssetChip = ({
  price,
  decimals,
  balance,
  name,
  icon,
}: CombinedTokenDataEntry) => {
  const Coin = icon;
  const theBalance = TokenBalanceFormatter(
    BigNumber.from(balance).toString(),
    decimals
  );

  return (
    <Box bgColor='#FDABAB' borderRadius={10} margin={15}>
      <Flex>
        <Box
          // bgColor='secondary.100'
          marginLeft='15'
          marginTop='15'
          marginRight='15'
          marginBottom='3'
          minWidth='80%'
        >
          <Flex flexDir='row'>
            <Coin height='50px' width='50px' />
            {/* <Spacer /> */}
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
          <Text fontSize='2xl'>${Number(theBalance) / Number(price)}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
