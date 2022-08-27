import { Alchemy, AssetTransfersWithMetadataResponse } from 'alchemy-sdk';
import { TransactionHistoryStore } from '../stores';
import { LoadedWalletStore } from '../stores';

// * @dev: Modify later
export const AlchemyERC20TransferHistoryCaller = async (
  addressToQuery: string,
  startingBlock: string = '0x0'
) => {
  try {
    const alchemy = new Alchemy(LoadedWalletStore.alchemyConfig);
    const response: any = await alchemy.core
      .getAssetTransfers({
        fromBlock: startingBlock,
        fromAddress: addressToQuery,
        // @ts-ignore
        category: ['erc20'],
      })
      .then((value: AssetTransfersWithMetadataResponse) => {
        console.log(JSON.parse(JSON.stringify(value)), '<=== service');
        const stringifiedValue = JSON.stringify(value.transfers);
        // @ts-ignore
        if (stringifiedValue === '[]') {
          TransactionHistoryStore.setPastTransactionStatus('empty');
        } else {
          TransactionHistoryStore.setPastTransactionStatus('success');
          return value.transfers;
        }
      });
    return response;
  } catch (e) {
    TransactionHistoryStore.setPastTransactionStatus('error');
    // console.log(`error: ${e}`);
    alert(e);
    return '';
  }
};
