import { erc20HistoryResponse } from '../models/ext_models';
import { LoadedWalletStore } from '../stores';

// * @dev: Modify later
export const AlchemyERC20TransferHistoryCaller = async (
  startingBlock: string = '',
  addressToQuery: string = ''
): Promise<erc20HistoryResponse | ''> => {
  try {
    // @ts-ignore
    return await LoadedWalletStore.alchemyProvider.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress: '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1',
      // @ts-ignore
      category: ['erc20'],
    });
  } catch (e) {
    alert(e);
    return '';
  }
};

//
