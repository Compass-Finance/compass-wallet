import { action, makeAutoObservable, observable } from 'mobx';
import { SelectedTokenData } from '../models/int_models';

export class NewTransactionStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable selectedTokenData: SelectedTokenData = {} as SelectedTokenData;

  @observable hrTransferAmount: string = '0';

  @observable txnReadyTransferAmt: string = '';
  @observable txnReadyAddress: string = '';

  @observable wantsToScan: boolean = false;
  @observable scanned: boolean = false;
  @observable scannedText: boolean = false;

  @action setWantsToScan(bool: boolean) {
    this.wantsToScan = bool;
  }
  @action setScaned(bool: boolean) {
    this.scanned = bool;
  }
  @action setScannedTet(bool: boolean) {
    this.scannedText = bool;
  }

  @action setTxnReadyAddress(address: string) {
    this.txnReadyAddress = address;
  }

  @action setSelectedTokenData(tokenDataObj: SelectedTokenData) {
    this.selectedTokenData = tokenDataObj;
  }

  @action setHRTransferAmount(amount: string) {
    this.hrTransferAmount = amount;
  }

  @action setTxnReadyTransferAmt(amount: string) {
    this.txnReadyTransferAmt = amount;
  }
}

export default new NewTransactionStore();
