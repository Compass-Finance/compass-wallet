import { action, observable } from 'mobx';

export class RecoverWalletStore {
  // What are the things that need to be kept track of
  @observable inputMnemonic: string = '';

  // * @dev: Only covers string that will
  // * be capitalized & have '\n' keywords, ie the pasted words
  @action updateMnemonic(inputStr: string) {
    const inputArr = inputStr.split('\n');
    let tempArr: string[] = [];
    for (let i = 0; i < inputArr.length; i++) {
      tempArr.push(inputArr[i].trim().toLowerCase());
    }
    this.inputMnemonic = tempArr.join(' ');
  }
}

export default new RecoverWalletStore();
