// you'll map and pass certain props to the txn chips
import { Box, Center, Flex, ScrollView, Text } from 'native-base';
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { TxnChip } from '../TxnChip';
import { wait } from '../../logic/utils';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../../logic/models/int_models';
import { txnHistoryActions } from '../../logic/actions';
import { LoadedWalletStore } from '../../logic/stores';

interface txnChipProps {
  txnArray: CleanedAlchemyERC20TransferHistoryEntry[];
}

export const TxnChipList = ({ txnArray }: txnChipProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    txnHistoryActions.setPastTransactionArray(LoadedWalletStore.wallet.address);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
