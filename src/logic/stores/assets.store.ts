import { action, observable } from 'mobx';
import { CombinedTokenData } from '../models/int_models';

export class AssetsStore {
  @observable tokenDataArr: CombinedTokenData[] = [];

  @action setTokenDataArr(input: CombinedTokenData[]) {
    this.tokenDataArr = input;
  }
}

export default new AssetsStore();
