// you'll map and pass certain props to the txn chips
import { Box, Center, Flex, ScrollView, Text } from 'native-base';
import { TxnChip } from '../TxnChip';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../../logic/models/int_models';

interface txnChipProps {
  txnArray: CleanedAlchemyERC20TransferHistoryEntry[];
}

export const TxnChipList = ({ txnArray }: txnChipProps) => {
  return (
    <ScrollView>
      <Center>
        <Flex
          flexDir='row'
          w='100%'
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          style={{
            padding: 25,
          }}
        >
          {txnArray &&
            txnArray.map((v: CleanedAlchemyERC20TransferHistoryEntry) => {
              return (
                <Box
                  bgColor='primary.100'
                  borderColor='black'
                  borderWidth='2'
                  marginBottom='15'
                  key={v.hash}
                >
                  <Text>FROM:{v.from}</Text>
                  <Text>TO:{v.to}</Text>
                  <Text>TOKEN NAME: {v.tokenName}</Text>
                  <Text>TOKEN AMOUNT: {v.realTokenAmount}</Text>
                </Box>
              );
            })}
        </Flex>
      </Center>
    </ScrollView>
  );
};
// We're not out the woods yet, so here's what needs to happen next!!!
/*
* 1. Make the component prop-based

* 2. Now just make it come from the component

So literally just move the array up to the view and pass it... 





*/
