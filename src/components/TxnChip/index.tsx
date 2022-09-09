// What will it return though
import { Badge, Box, Flex, HStack, Pressable, Spacer, Text } from 'native-base';
// ! import the searchable object here to select properly
import { getDepositOrWithdrawlSvg } from '../../logic/utils';

interface txnChipProps {
  from: string;
  to: string;
  tokenName: string;
  realTokenAmount: string;
  withdrawlOrDeposit: 'deposits' | 'withdrawls';
}

function cut(str: string, cutStart: number, cutEnd: number) {
  return `${str.substring(0, cutStart)}...${str.substring(cutEnd + 1)}`;
}

export const TxnChip = ({
  from,
  to,
  tokenName,
  realTokenAmount,
  withdrawlOrDeposit,
}: txnChipProps) => {
  const AssetIcon = getDepositOrWithdrawlSvg(tokenName, withdrawlOrDeposit);
  return (
    <Box width='100%'>
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box
          backgroundColor='white'
          shadow={'5'}
          margin={2}
          width='95%'
          padding='5'
          rounded='8'
          // borderWidth={4}
          // borderColor='primary.100'
          // marginLeft='5'
          // marginRight='5'
          // borderBottomColor={'black'}
          // borderBottomWidth='1'
        >
          <Flex flexDirection='row'>
            <Box marginTop={2}>
              <AssetIcon width='42px' height='42px' />
            </Box>

            <Box marginLeft={5}>
              <Text fontWeight='bold' marginBottom={3}>
                {`${withdrawlOrDeposit === 'withdrawls' ? '-' : '+'} ${Number(
                  realTokenAmount
                ).toFixed(8)} ${tokenName}`}
              </Text>
              <Text fontWeight={'semibold'}>
                {withdrawlOrDeposit === 'withdrawls'
                  ? `TO: ${cut(to, 5, 35)}` // from -2
                  : `FROM: ${cut(from, 5, 37)}`}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Pressable>
    </Box>
  );
};
