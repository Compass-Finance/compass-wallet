import { action, observable, makeAutoObservable } from 'mobx';
import {
  CombinedTokenData,
  CombinedTokenDataEntry,
} from '../models/int_models';

export class AssetsStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable tokenDataArr: CombinedTokenDataEntry[] = [];

  @action setTokenDataArr(input: CombinedTokenDataEntry[]) {
    this.tokenDataArr = input;
  }
}

export default new AssetsStore();
