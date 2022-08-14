import { RecoverWalletStore } from '../stores';

export const setInputMnemonic = (input: string) => {
  RecoverWalletStore.setInputMnemonic(input);
};

export const setDummyWord = (word: string) => {
  RecoverWalletStore.setDummyWord(word);
};
