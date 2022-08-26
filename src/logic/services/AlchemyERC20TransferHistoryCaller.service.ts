import { AssetTransfersWithMetadataResponse } from 'alchemy-sdk';
import { erc20HistoryResponse } from '../models/ext_models';
import { LoadedWalletStore } from '../stores';

// * @dev: Modify later
export const AlchemyERC20TransferHistoryCaller = async (
  addressToQuery: string,
  startingBlock: string = '0x0'
): Promise<'empty' | AssetTransfersWithMetadataResponse | ''> => {
  try {
    // @ts-ignore
    const response =
      await LoadedWalletStore.alchemyProvider.core.getAssetTransfers({
        fromBlock: startingBlock,
        fromAddress: addressToQuery,
        // @ts-ignore
        category: ['erc20'],
      });
    // @ts-ignore
    if (response === []) {
      return 'empty';
    } else {
      return response;
    }
  } catch (e) {
    alert(e);
    return '';
  }
};
