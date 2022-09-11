import { BigNumber } from 'ethers';
import { SelectedTokenData } from '../models/int_models';
import { NewTransactionStore } from '../stores';
import { AssetsStore } from '../stores';
import { TokenBalanceFormatter, wait } from '../utils';

export const setSelectedTokenData = (tokenDataObj: SelectedTokenData) => {
  NewTransactionStore.setSelectedTokenData(tokenDataObj);
};

export const populateSelectedTokenObj = () => {
  const tokenDataObj = AssetsStore.tokenDataArr.filter((value) => {
    if (value.name === AssetsStore.selectedTokenData.selectedTokenName) {
      return value;
    }
  });
  const humanReadableBalance = TokenBalanceFormatter(
    BigNumber.from(tokenDataObj[0].balance).toString(),
    tokenDataObj[0].decimals
  ) as number;
  const balance = humanReadableBalance * Number(tokenDataObj[0].price);

  setSelectedTokenData({
    price: tokenDataObj[0].price,
    decimals: tokenDataObj[0].decimals,
    nativeBalanceHex: tokenDataObj[0].balance,
    nativeBalanceReadable: humanReadableBalance,
    USDBalance: balance,
    contractAddress: tokenDataObj[0].contractAddress,
    name: tokenDataObj[0].name,
  });
  console.log('something ===>', NewTransactionStore.selectedTokenData);
};

export const setHRTransferAmount = (charInput: string) => {
  const tokenData = NewTransactionStore.selectedTokenData;
  const tokenBalance = NewTransactionStore.hrTransferAmount;
  const newTxnStore = NewTransactionStore;
  // alert(`New TXN STORE LENGTH ${newTxnStore.hrTransferAmount.length}`);

  if (tokenBalance.includes('.') && charInput.includes('.')) {
    return;
  } else if (charInput.includes('<')) {
    console.log(
      `IN THA DELETE BRANCH, length before the delete ${
        newTxnStore.hrTransferAmount.length
      } ${typeof newTxnStore.hrTransferAmount.length}`
    );
    if (NewTransactionStore.hrTransferAmount === '0') {
      return;
    } else if (NewTransactionStore.hrTransferAmount.length === 1) {
      newTxnStore.setHRTransferAmount('0');
      return;
    }

    newTxnStore.setHRTransferAmount(newTxnStore.hrTransferAmount.slice(0, -1));
  } else if (newTxnStore.hrTransferAmount.length > tokenData.decimals) {
    return;
  } else if (
    newTxnStore.hrTransferAmount.length === 1 &&
    charInput !== '.' &&
    charInput !== '<' &&
    charInput !== '0'
  ) {
    newTxnStore.setHRTransferAmount(charInput);
  }

  // else if (newTxnStore.hrTransferAmount.length === 1 && charInput === '<') {
  //   newTxnStore.setHRTransferAmount('0');
  // }
  else if (newTxnStore.hrTransferAmount === '0' && charInput === '<') {
    return;
  } else {
    newTxnStore.setHRTransferAmount(newTxnStore.hrTransferAmount + charInput);
  }
};

export const setTxnReadyTransferAmt = (amount: string) => {
  NewTransactionStore.setTxnReadyTransferAmt(amount);
};
