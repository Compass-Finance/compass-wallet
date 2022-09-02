import { Alchemy, AssetTransfersWithMetadataResponse } from 'alchemy-sdk';
import { TransactionHistoryStore } from '../stores';
import { LoadedWalletStore } from '../stores';

// * @dev: Modify later
export const AlchemyERC20TransferHistoryCaller = async (
  addressToQuery: string,
  withdrawlsOrDeposits: 'withdrawls' | 'deposits',
  startingBlock: string = '0x0'
) => {
  try {
    const alchemy = new Alchemy(LoadedWalletStore.alchemyConfig);
    let response: any;
    if (withdrawlsOrDeposits === 'deposits') {
      response = await alchemy.core
        .getAssetTransfers({
          fromBlock: startingBlock,
          toAddress: addressToQuery,
          // @ts-ignore
          category: ['erc20'],
        })
        .then((value: AssetTransfersWithMetadataResponse) => {
          const stringifiedValue = JSON.stringify(value.transfers);
          if (stringifiedValue === '[]') {
            TransactionHistoryStore.setPastTransactionStatus('empty');
          } else {
            TransactionHistoryStore.setPastTransactionStatus('success');
            return value.transfers;
          }
        });
    } else if (withdrawlsOrDeposits === 'withdrawls') {
      response = await alchemy.core
        .getAssetTransfers({
          fromBlock: startingBlock,
          fromAddress: addressToQuery,
          // @ts-ignore
          category: ['erc20'],
        })
        .then((value: AssetTransfersWithMetadataResponse) => {
          const stringifiedValue = JSON.stringify(value.transfers);
          if (stringifiedValue === '[]') {
            TransactionHistoryStore.setPastTransactionStatus('empty');
          } else {
            TransactionHistoryStore.setPastTransactionStatus('success');
            return value.transfers;
          }
        });
    }
    return response;
  } catch (e) {
    TransactionHistoryStore.setPastTransactionStatus('error');
    alert(e);
    return '';
  }
};
