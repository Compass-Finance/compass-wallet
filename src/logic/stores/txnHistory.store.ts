import { action, makeAutoObservable, observable } from 'mobx';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';

export class TransactionHistoryStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable pastTransactionArray: CleanedAlchemyERC20TransferHistoryEntry[] =
    [];

  @observable pastTransactionStatus: 'empty' | 'error' | 'success' | '' = '';

  @action setPastTransactionArray(
    txnList: CleanedAlchemyERC20TransferHistoryEntry[]
  ) {
    this.pastTransactionArray = txnList;
  }

  @action setPastTransactionStatus(input: 'empty' | 'error' | 'success') {
    this.pastTransactionStatus = input;
  }

  @action addToPastTxnArray({
    to,
    from,
    tokenName,
    realTokenAmount,
    hash,
  }: CleanedAlchemyERC20TransferHistoryEntry) {
    this.pastTransactionArray.push({
      hash: hash,
      to: to,
      from: from,
      tokenName: tokenName,
      realTokenAmount: realTokenAmount,
    });
  }
}

export default new TransactionHistoryStore();

// && Now that I think a lot of the base methods have been established now here are the next few steps
// * 1. Get the actions working
// * 2. Connect the data to a component & then the screen
