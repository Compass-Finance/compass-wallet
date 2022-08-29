import { Alchemy, AssetTransfersWithMetadataResponse } from 'alchemy-sdk';
import { TransactionHistoryStore } from '../stores';
import { LoadedWalletStore } from '../stores';

// * @dev: Modify later
export const AlchemyERC20TransferHistoryCaller = async (
  addressToQuery: string,
  startingBlock: string = '0x0'
) => {
  try {
    // this is pain, I get it now though
    // the thing is it is only tracking the one's we received
    // so
    const alchemy = new Alchemy(LoadedWalletStore.alchemyConfig);

    // alchemy.core.getTokenBalances('')

    const response: any = await alchemy.core
      .getAssetTransfers({
        fromBlock: startingBlock,
        // fromAddress: addressToQuery,
        toAddress: addressToQuery,
        // @ts-ignore
        category: ['erc20'],
      })
      .then((value: AssetTransfersWithMetadataResponse) => {
        // console.log(JSON.parse(JSON.stringify(value.transfers)), '<=== service');
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
