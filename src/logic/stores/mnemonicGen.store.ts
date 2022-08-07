import { action, observable, makeAutoObservable } from 'mobx';
import { arrayEntry } from '../models/int_models';
import { generateNewMnemonic, generateMnemonicFragment } from '../utils';

export class MnemonicGenStore {
  constructor() {
    makeAutoObservable(this);
  }
  // & Omnipresent State Vars
  @observable prodMnemonic: string = '';
  @observable currentMnemonic: arrayEntry[] = [];
  @observable loading: boolean = false;
  // & End
  // ~ GenerateMnemonic State Vars
  @observable selectedWord: string = '';
  @observable selectedWordId: string = '';
  @observable wordIsSelected: boolean = false;
  // ~ END
  // ^^ BackupMnemonic State Vars
  @observable hint: string = '';
  // ^^ END
  // * InsertDummyWord State Vars
  @observable replacementMnemonicFragment: arrayEntry[] = [];
  @observable replacementWord: string = '';
  @observable replacementWordIsSelected: boolean = false;
  // * END
  // ! ConfirmDummyWord State Vars
  @observable presentationDummyMnemonic: arrayEntry[] = [];
  @observable unvalidatedFakeWordInput: string = '';
  @observable validatedDummyMnemonic: string[] = [];
  // ! END

  @action populateMnemonicArray() {
    if (this.loading === true) return;
    this.setLoading(true);
    [this.currentMnemonic, this.prodMnemonic] = generateNewMnemonic();
    this.setLoading(false);
  }

  @action setLoading(bool: boolean) {
    this.loading = bool;
  }

  @action setHint(string: string) {
    this.hint = string;
  }

  @action setReplacementWordBool(bool: boolean) {
    this.replacementWordIsSelected = bool;
  }

  @action selectWord(word: string) {
    this.selectedWord = word;
  }

  @action setWordIsSelected(bool: boolean) {
    this.wordIsSelected = bool;
  }

  @action generateFragment() {
    if (this.loading === true) return;
    [this.replacementMnemonicFragment] = generateMnemonicFragment();
  }

  @action selectDummyWord(word: string) {
    this.replacementWord = word;
  }

  @action validateMnemonic(dummyWord: string, expectedRealWord: string) {
    if (
      dummyWord === this.replacementWord &&
      expectedRealWord === this.selectedWord
    ) {
      for (let i = 0; i < this.presentationDummyMnemonic.length - 1; i++) {
        this.validatedDummyMnemonic.push(
          this.presentationDummyMnemonic[i].word
        );
      }
      return true;
    } else {
      return false;
    }
  }

  // so where do we put this? ==> Select Dummy Word
  @action generateFakeCompositeMnemonic() {
    const mnemonicCopy: arrayEntry[] = JSON.parse(
      JSON.stringify(this.currentMnemonic)
    );
    const i = Number(this.selectedWordId);
    this.presentationDummyMnemonic = mnemonicCopy;
    this.presentationDummyMnemonic[i].word = this.replacementWord;
  }

  @action wipeStore() {
    this.currentMnemonic = [];
    this.prodMnemonic = '';
    this.loading = false;
    this.selectedWord = '';
    this.selectedWordId = '';
    this.wordIsSelected = false;
    this.hint = '';
    this.replacementMnemonicFragment = [];
    this.replacementWord = '';
    this.replacementWordIsSelected = false;
    this.presentationDummyMnemonic = [];
    this.unvalidatedFakeWordInput = '';
    this.validatedDummyMnemonic = [];
  }
}
export default new MnemonicGenStore();
