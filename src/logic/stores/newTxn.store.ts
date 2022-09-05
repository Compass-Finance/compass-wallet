import { action, makeAutoObservable, observable } from 'mobx';
import { SelectedTokenData } from '../models/int_models';

export class NewTransactionStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable selectedTokenData: SelectedTokenData = {} as SelectedTokenData;

  @action setSelectedTokenData(tokenDataObj: SelectedTokenData) {
    this.selectedTokenData = tokenDataObj;
  }
}
// now make an actions that handles it and now the question
// is where do you get the data from to construct the object?

export default new NewTransactionStore();
