import { arrayEntry } from '../models/int_models';
import { MnemonicGenStore } from '../stores';
import { Wallet } from 'ethers';
// import { createWallet } from 'react-native-web3-wallet';

const generateMnemonic = (length: number = 13): [arrayEntry[], string] => {
  const newWallet = Wallet.createRandom();
  const mnemonicPhraseArr: string[] = newWallet.mnemonic.phrase.split(' ');
  const juicedUpMnemonicArr: arrayEntry[] = [];
  for (let i = 0; i < length - 1; i++) {
    juicedUpMnemonicArr.push({
      word: mnemonicPhraseArr[i],
      id: i.toString(),
    });
  }
  return [juicedUpMnemonicArr, newWallet.mnemonic.phrase];
};

export const generateNewMnemonic = (): [arrayEntry[], string] => {
  return generateMnemonic(13);
};

export const generateMnemonicFragment = (): [arrayEntry[], string] => {
  return generateMnemonic(7);
};
