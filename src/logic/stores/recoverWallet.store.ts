import { action, observable } from 'mobx';
import { arrayEntry } from '../models/int_models';

export class RecoverWalletStore {
  // What are the things that need to be kept track of
  @observable inputMnemonic: string = '';
  @observable presentationMnemonic: arrayEntry[] = [];
  @observable selectedDummyWord: string = '';
  @observable realWord: string = '';
  @observable realCompositeMnemonic: string = '';

  // * @dev: Only covers string that will
  // * be capitalized & have '\n' keywords, ie the pasted words
  @action setInputMnemonic(inputStr: string) {
    const inputArr = inputStr.split('\n');
    let tempArr: string[] = [];
    for (let i = 0; i < inputArr.length; i++) {
      tempArr.push(inputArr[i].trim().toLowerCase());
    }
    this.inputMnemonic = tempArr.join(' ');
  }

  @action generatePresentationDummyMnemonic() {
    const presArr: arrayEntry[] = [];
    const mnemonicStrArr: string[] = this.inputMnemonic.split(' ');
    for (let i = 0; i < mnemonicStrArr.length; i++) {
      presArr.push({
        id: i.toString(),
        word: mnemonicStrArr[i],
      });
    }
    this.presentationMnemonic = presArr;
  }

  @action setDummyWord(word: string) {
    this.selectedDummyWord = word;
  }

  @action setRealWord(word: string) {
    this.realWord = word;
  }

  @action generateProperMnemonic() {
    const inputMnemonicArr = this.inputMnemonic.trim().split(' ');
    const selectedDummyWord = this.selectedDummyWord;
    const realWordInput = this.realWord;
    for (let i = 0; i < inputMnemonicArr.length; i++) {
      if (selectedDummyWord === inputMnemonicArr[i]) {
        inputMnemonicArr[i] = realWordInput;
      }
      const realMnemonicStr = inputMnemonicArr.join(' ');
      this.realCompositeMnemonic = realMnemonicStr;
    }
    // ^^ Then once this is generated you'll want to use the ethers utility
    // ^^ function the
  }

  @action wipeTheStore() {
    this.inputMnemonic = '';
    this.presentationMnemonic = [];
    this.selectedDummyWord = '';
    this.realWord = '';
    this.realCompositeMnemonic = '';
  }
}

export default new RecoverWalletStore();
