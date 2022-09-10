import { arrayEntry } from '../models/int_models';
import { MnemonicGenStore } from '../stores';
import { Wallet } from 'ethers';
import { createWallet } from 'react-native-web3-wallet';
// import { Wallet } from 'zksync';

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
  const returnedVal = generateMnemonic(13);
  return returnedVal;
};

export const generateMnemonicFragment = (): [arrayEntry[], string] => {
  const returnedVal = generateMnemonic(7);
  return returnedVal;
};
