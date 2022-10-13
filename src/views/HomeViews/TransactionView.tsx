import { Box, Center, Text, ScrollView } from 'native-base';
import { RefreshControl } from 'react-native';
import { TxnChipList } from '../../components/TxnChipList';
import { useEffect, useState, useCallback } from 'react';
import { loadedWalletActions, txnHistoryActions } from '../../logic/actions';
import { TransactionHistoryStore } from '../../logic/stores';
import { LoadedWalletStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import { wait } from '../../logic/utils';
import { TxnChoiceButtons } from '../../components/TxnChoiceButtons';
import { stylingCalculator } from '../../logic/utils';

export const TransactionView = observer(() => {
  const { height } = Dimensions.get('window');
  const [TxnView, setTxnView] = useState('deposits');
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
    const something = async () => {
      if (LoadedWalletStore.walletHasBeenLoaded === false) {
        await loadedWalletActions.loadWallet('mumbai').then(async () => {
          await txnHistoryActions.setPastTransactionArray(
            LoadedWalletStore.wallet.address,
            TxnView as 'deposits' | 'withdrawls'
          );
        });
        pastTxnStatusRxn();
      } else if (LoadedWalletStore.walletHasBeenLoaded === true) {
        await txnHistoryActions.setPastTransactionArray(
          LoadedWalletStore.wallet.address,
          TxnView as 'deposits' | 'withdrawls'
        );
      }
    };
    something();
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
            TransactionHistoryStore.setPastTransactionArray([]);
            setTxnView('deposits');
          }}
          withdrawlsPayload={() => {
            TransactionHistoryStore.setPastTransactionArray([]);
            setTxnView('withdrawls');
          }}
          viewState={TxnView as 'withdrawls' | 'deposits'}
        />
        <Box
          backgroundColor={'secondary.100'}
          marginBottom={stylingCalculator(height, {
            xs: 120,
            sm: 120,
            md: 120,
            lg: 125,
            xl: 86,
          })}
        />
      </Center>
    </Box>
  );
});
