import { LoadedWalletStore, TransactionHistoryStore } from '../stores';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';
import { AlchemyERC20TransferHistoryCaller } from '../services';
import { txnCleaner } from '../middleware';
import { dummyDeposits, dummyWithdrawls } from '../mocks';

export const setPastTransactionArray = async (
  addressToQuery: string,
  withdrawlsOrDeposits: 'withdrawls' | 'deposits'
) => {
  // if (process.env.NODE_ENV === 'production') {
  try {
    await AlchemyERC20TransferHistoryCaller(
      addressToQuery,
      withdrawlsOrDeposits
    ).then((value) => {
      console.log(`VALUE =======> ${value}!!!!!!`);
      if (TransactionHistoryStore.pastTransactionStatus === 'success') {
        const valueCopy = JSON.parse(JSON.stringify(value)) as typeof value;
        const cleanedTxnResponse: CleanedAlchemyERC20TransferHistoryEntry[] =
          txnCleaner(valueCopy);
        TransactionHistoryStore.setPastTransactionArray(cleanedTxnResponse);
      }
    });
  } catch (e) {
    console.log(e);
  }
  // }
  // else {
  // TransactionHistoryStore.setPastTransactionStatus('');
  // if (withdrawlsOrDeposits === 'withdrawls') {
  //   TransactionHistoryStore.setPastTransactionArray(dummyWithdrawls);
  //   TransactionHistoryStore.setPastTransactionStatus('success');
  // } else if (withdrawlsOrDeposits === 'deposits') {
  //   TransactionHistoryStore.setPastTransactionArray(dummyDeposits);
  //   TransactionHistoryStore.setPastTransactionStatus('success');
  // }
  // }
};
