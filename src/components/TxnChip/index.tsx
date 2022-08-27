// What will it return though
import { Badge, Box, Flex, HStack, Pressable, Spacer, Text } from 'native-base';

interface txnChipProps {
  from: string;
  to: string;
  tokenName: string;
  realTokenAmount: string;
}

export const TxnChip = ({
  from,
  to,
  tokenName,
  realTokenAmount,
}: txnChipProps) => {
  return (
    <Box alignItems='center'>
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box
          maxW='96'
          borderWidth='1'
          borderColor='coolGray.300'
          shadow='3'
          bg='primary.100'
          p='5'
          rounded='8'
        >
          <Text>FROM: {from}</Text>
          <Text>TO: {to}</Text>
          <Text>TOKEN NAME: {tokenName}</Text>
          <Text>AMOUNT: {realTokenAmount}</Text>
        </Box>
      </Pressable>
    </Box>
  );
};
/*
It's ugly but das the point, we're just trying to get the logic
so so then the presentational layer will be where most of the work happens

So what's next?

Well now you need to


*/
