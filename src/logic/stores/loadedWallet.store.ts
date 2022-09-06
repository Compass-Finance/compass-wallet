import { action, observable } from 'mobx';
import { Alchemy, AlchemyConfig, Wallet } from 'alchemy-sdk';
import Constants from 'expo-constants';

export class LoadedWalletStore {
  @observable pk: string = '';

  @observable walletHasBeenLoaded: boolean = false;

  @observable alchemyConfig: AlchemyConfig = {} as AlchemyConfig;

  @observable rpcUrlOrApiKey: string = '';

  @observable mumbaiRPC: string = Constants?.manifest?.extra?.MUMBAI_RPC_URL;

  @observable maticRPC: string = Constants?.manifest?.extra?.MATIC_RPC_URL;

  @observable alchemyProvider: Alchemy = {} as Alchemy;

  @observable wallet: Wallet = {} as Wallet;

  @action loadWallet(network: 'local' | 'mumbai' | 'maticMainnet') {
    if (network === 'local') {
      this.pk = Constants.manifest?.extra?.GANACHE_ACCT_1_PK || '';
      this.rpcUrlOrApiKey = Constants.manifest?.extra?.GANACHE_RPC_URL || '';
    } else if (network === 'mumbai') {
      this.rpcUrlOrApiKey = Constants.manifest?.extra?.ALCHEMY_API_KEY;
    }
    this.walletHasBeenLoaded = true;
  }

  @action setPk(pk: string) {
    this.pk = pk;
  }

  @action setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }

  @action setAlchemyConfig(config: AlchemyConfig) {
    this.alchemyConfig = config;
  }

  @action setAlchemyProvider(alchemyProvider: Alchemy) {
    this.alchemyProvider = alchemyProvider;
  }
}

export default new LoadedWalletStore();
