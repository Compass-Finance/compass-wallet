import { transferEntry } from '../models/ext_models';
import { BigNumber } from 'ethers';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';

export const txnCleaner = (
  alchemyAPIResponse: transferEntry
): CleanedAlchemyERC20TransferHistoryEntry[] => {
  const transfersArr: any = alchemyAPIResponse;
  let tempArr: CleanedAlchemyERC20TransferHistoryEntry[] = [];
  transfersArr.map((x: transferEntry) => {
    tempArr.push({
      hash: x.hash,
      from: x.from,
      to: x.to,
      tokenName: x.asset,
      realTokenAmount: x.value.toString() || '0',
    });
  });
  return tempArr;
};
