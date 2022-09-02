import { Dispatch, SetStateAction } from 'react';
import { Box, Button, Center, Flex, Text, View } from 'native-base';
import { TxnChipList } from '../../components/TxnChipList';
import { useEffect, useState } from 'react';
import { txnHistoryActions } from '../../logic/actions';
import { TransactionHistoryStore } from '../../logic/stores';
import { LoadedWalletStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';

export const TransactionView = observer(() => {
  const [pastTxnStatus, setPastTxnStatus] = useState('');
  const [TxnView, setTxnView] = useState('deposits');
  const selectedBtnStyling = { backgroundColor: '#FF8989' };
  const nonSelectedBtnStyling = {
    backgroundColor: 'transparent',
    borderColor: '#FF8989',
    borderWidth: '2',
  };

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
    txnHistoryActions.setPastTransactionArray(
      LoadedWalletStore.wallet.address
      // '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1'
    );
    pastTxnStatusRxn();
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Transaction View</Text>
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
        <Box>
          <Flex flexDirection='row'>
            {/* 
              So what's next ? Well now you want to conditionally show
              different sytles based on what's selected

            // * 1. Create a useState
            // * 2. Then create conditional styling based on that variable

            */}
            <Button
              onPress={() => {
                setTxnView('deposits');
              }}
              // @ts-ignore
              style={
                TxnView === 'deposits'
                  ? selectedBtnStyling
                  : nonSelectedBtnStyling
              }
              // backgroundColor={
              //   TxnView === 'deposits' ? 'primary.100' : 'secondary.100'
              // }
              width='50%'
              borderRadius='0'
            >
              <Text color={TxnView === 'withdrawls' ? 'primary.100' : 'white'}>
                Deposits
              </Text>
            </Button>
            <Button
              onPress={() => {
                setTxnView('withdrawls');
              }}
              // @ts-ignore
              style={
                TxnView === 'withdrawls'
                  ? selectedBtnStyling
                  : nonSelectedBtnStyling
              }
              borderRadius='0'
              width='50%'
            >
              <Text color={TxnView === 'deposits' ? 'primary.100' : 'white'}>
                Withdrawls
              </Text>
            </Button>
          </Flex>
        </Box>
      </Center>
    </View>
  );
});
