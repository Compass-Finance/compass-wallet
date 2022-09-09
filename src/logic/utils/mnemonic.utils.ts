import { arrayEntry } from '../models/int_models';
import { MnemonicGenStore } from '../stores';
import { Wallet } from 'ethers';
import { createWallet } from 'react-native-web3-wallet';
// import { Wallet } from 'zksync';

// const generateMnemonic = (length: number = 13): [arrayEntry[], string] => {
//   const newWallet = Wallet.createRandom();
//   const mnemonicPhraseArr: string[] = newWallet.mnemonic.phrase.split(' ');
//   const juicedUpMnemonicArr: arrayEntry[] = [];
//   for (let i = 0; i < length - 1; i++) {
//     juicedUpMnemonicArr.push({
//       word: mnemonicPhraseArr[i],
//       id: i.toString(),
//     });
//   }
//   return [juicedUpMnemonicArr, newWallet.mnemonic.phrase];
// };

const generateMnemonic = async (
  length: number = 13
): Promise<[arrayEntry[], string]> => {
  const newMnemonicArr = await createWallet('', "m/44'/60'/0'/0/0").then(
    (value) => {
      return value.mnemonic;
    }
  );
  const newMnemonicStr = newMnemonicArr.join(' ');
  const juicedUpMnemonicArr: arrayEntry[] = [];
  for (let i = 0; i < length - 1; i++) {
    juicedUpMnemonicArr.push({
      word: newMnemonicArr[i],
      id: i.toString(),
    });
  }
  return [juicedUpMnemonicArr, newMnemonicStr];
};

export const generateNewMnemonic = async (): Promise<
  [arrayEntry[], string]
> => {
  const returnedVal = await generateMnemonic(13);
  console.log('THE RETURNED MNEMONIC STR ', returnedVal[1]);
  return returnedVal;
};

export const generateMnemonicFragment = async (): Promise<
  [arrayEntry[], string]
> => {
  const returnedVal = generateMnemonic(7);
  return returnedVal;
};
