import { Box, Center, Text, ScrollView } from 'native-base';
import { RefreshControl } from 'react-native';
import { TxnChipList } from '../../components/TxnChipList';
import { useEffect, useState, useCallback } from 'react';
import { txnHistoryActions } from '../../logic/actions';
import { TransactionHistoryStore } from '../../logic/stores';
import { LoadedWalletStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import txnHistoryStore from '../../logic/stores/txnHistory.store';
import { wait } from '../../logic/utils';
import { TxnChoiceButtons } from '../../components/TxnChoiceButtons';

export const TransactionView = observer(() => {
  const { height } = Dimensions.get('window');
  const [TxnView, setTxnView] = useState('withdrawls');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    txnHistoryActions.setPastTransactionArray(
      LoadedWalletStore.wallet.address,
      TxnView as 'deposits' | 'withdrawls'
    );
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [_, setPastTxnStatus] = useState('');

  const pastTxnStatusRxn = reaction(
    () => TransactionHistoryStore.pastTransactionStatus,
    () => {
      if (TransactionHistoryStore.pastTransactionStatus === 'empty') {
        setPastTxnStatus('empty');
      } else if (TransactionHistoryStore.pastTransactionStatus === 'success') {
        setPastTxnStatus('success');
      } else if (TransactionHistoryStore.pastTransactionStatus === 'error') {
        setPastTxnStatus('error');
      }
    }
  );
  useEffect(() => {
    txnHistoryActions.setPastTransactionArray(
      LoadedWalletStore.wallet.address,
      // '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1',
      TxnView as 'deposits' | 'withdrawls'
    );
    pastTxnStatusRxn();
    console.log(txnHistoryStore.pastTransactionArray, '<===== From the comp');
  }, [TxnView]);

  return (
    <Box
      style={{
        display: 'flex',
      }}
      safeAreaTop={true}
      safeAreaBottom={true}
      backgroundColor='background.100'
    >
      <Text
        // fontFamily={''}
        fontWeight='bold'
        marginLeft='7'
        marginTop='15'
        fontSize='3xl'
        bold={true}
      >
        Transactions
      </Text>
      <Center height='full' bgColor='background.100'>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {TransactionHistoryStore.pastTransactionStatus === 'success' && (
            <TxnChipList
              depositsOrWithdrawl={TxnView as 'deposits' | 'withdrawls'}
              txnArray={TransactionHistoryStore.pastTransactionArray}
            />
          )}
          {TransactionHistoryStore.pastTransactionStatus === 'error' && (
            <Text>Something went wrong... Try again later</Text>
          )}
          {TransactionHistoryStore.pastTransactionStatus === 'empty' && (
            <Text>No Transactions found...</Text>
          )}
        </ScrollView>
        <TxnChoiceButtons
          depositPayload={() => {
            setTxnView('deposits');
          }}
          withdrawlsPayload={() => {
            setTxnView('withdrawls');
          }}
          viewState={TxnView as 'withdrawls' | 'deposits'}
        />
        <Box height={height > 800 ? '86' : '120'} />
      </Center>
    </Box>
  );
});
