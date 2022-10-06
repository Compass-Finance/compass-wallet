import { action, observable, makeAutoObservable } from 'mobx';
import { selectedToken } from '../models/int_models';
import { UserTokenDataResEntry } from '../models/int_models';

export class AssetsStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable tokenDataArr: UserTokenDataResEntry[] = [];

  @observable selectedTokenData: selectedToken = {
    selectedTokenName: '',
    sendOrReceive: '',
  };

  @action setTokenDataArr(input: UserTokenDataResEntry[]) {
    this.tokenDataArr = input;
  }

  @action setSelectedTokenData(
    tokenName: string,
    sendOrReceive: 'send' | 'receive'
  ) {
    this.selectedTokenData = {
      selectedTokenName: tokenName,
      sendOrReceive: sendOrReceive,
    };
  }
}

export default new AssetsStore();
// Now you'll want to import this into the options comp
// and then rig it.

// Now that it's rigged you'll want to set up the reaction
// and the useEffect combo in the high level view
// and then pass the relevant data vai props
