import { Alchemy } from 'alchemy-sdk';
import { LoadedWalletStore } from '../stores';
import { TOKEN_CONTRACT_ADDRESSES_LIST } from '../constants';

export const alchemyTokenBalanceGetter = async () => {
  try {
    const alchemy = new Alchemy(LoadedWalletStore.alchemyConfig);

    const response = await alchemy.core.getTokenBalances(
      LoadedWalletStore.wallet.address,
      TOKEN_CONTRACT_ADDRESSES_LIST
    );
    return response;
  } catch (e) {}
};
