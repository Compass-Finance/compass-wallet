import { LoadedWalletStore } from '../stores';
import { Alchemy, Network, Wallet } from 'alchemy-sdk'; //AlchemyProvider
import { JsonRpcBatchProvider } from '@ethersproject/providers';
import { HDNode } from 'ethers/lib/utils';
import { getValueFor } from '../utils';
import Constants from 'expo-constants';
export const loadWallet = async (network: 'local' | 'mumbai') => {
  try {
    if (network === 'local') {
      LoadedWalletStore.loadWallet('local');
    } else if (network === 'mumbai') {
      // @ts-ignore
      LoadedWalletStore.setAlchemyConfig({
        network: Network.MATIC_MAINNET,
        // Todo change ^^ later
        apiKey: LoadedWalletStore.rpcUrlOrApiKey,
      });
      // alert(LoadedWalletStore.rpcUrlOrApiKey);
      LoadedWalletStore.setAlchemyProvider(
        new Alchemy(LoadedWalletStore.alchemyConfig)
      );
      LoadedWalletStore.setPk(await getValueFor('pk'));
      const mnemonic = HDNode.fromMnemonic(LoadedWalletStore.pk);
      const url = LoadedWalletStore.mumbaiRPC;
      const provider = new JsonRpcBatchProvider(url);
      // @ts-ignore
      LoadedWalletStore.setWallet(new Wallet(mnemonic.privateKey, provider));
    } else if (network === '') {
    }
  } catch (e) {
    alert(e);
  }
};
