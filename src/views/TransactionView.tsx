import { Center, Text, View } from 'native-base';
import { TxnChipList } from '../components/TxnChipList';
import { useEffect, useState } from 'react';
import { txnHistoryActions } from '../logic/actions';
import { TransactionHistoryStore } from '../logic/stores';
import { LoadedWalletStore } from '../logic/stores';
import { reaction } from 'mobx';
import { Observer } from 'mobx-react';
import { observer } from 'mobx-react-lite';
// import {Observer} from 'mobx-react'

export const TransactionView = observer(() => {
  const [pastTxnStatus, setPastTxnStatus] = useState('');

  const pastTxnStatusRxn = reaction(
    () => {
      return TransactionHistoryStore.pastTransactionStatus;
    },
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
    // if (TransactionHistoryStore.pastTransactionStatus === '') {
    txnHistoryActions.setPastTransactionArray(
      LoadedWalletStore.wallet.address
      // '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1'
    );
    // }
    // if (TransactionHistoryStore.pastTransactionStatus !== '') {
    pastTxnStatusRxn();
    // }
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Transaction View</Text>
        <Text>{TransactionHistoryStore.pastTransactionStatus} === Store </Text>
        <Text>{pastTxnStatus} === State </Text>
        {TransactionHistoryStore.pastTransactionStatus === 'success' && (
          <TxnChipList
            txnArray={TransactionHistoryStore.pastTransactionArray}
          />
        )}
        {TransactionHistoryStore.pastTransactionStatus === 'error' && (
          <Text>Something went wrong... Try again later</Text>
        )}
        {TransactionHistoryStore.pastTransactionStatus === 'empty' && (
          <Text>No Transactions found...</Text>
        )}
      </Center>
    </View>
  );
});
