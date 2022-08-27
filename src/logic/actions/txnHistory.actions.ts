import { TransactionHistoryStore } from '../stores';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';
import { AlchemyERC20TransferHistoryCaller } from '../services';
import { txnCleaner } from '../middleware';

export const setPastTransactionArray = async (addressToQuery: string) => {
  try {
    await AlchemyERC20TransferHistoryCaller(addressToQuery).then((value) => {
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
};
