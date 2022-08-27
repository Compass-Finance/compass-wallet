import { transferEntry } from '../models/ext_models';
import { BigNumber } from 'ethers';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';

// TODO @dev: This is not fully complete, you'll need to add a short circuit branch for if a certain type
// *       like an empty string is returned, and that will be done at the service layer.
// *       so it will be handled without throwing an error and if the response fails for whatever reason.
// *       without throwing errors, so make sure to add that
export const txnCleaner = (
  alchemyAPIResponse: transferEntry
): CleanedAlchemyERC20TransferHistoryEntry[] => {
  // logic
  // console.log(`HERE IS WHAT'S ENTERING THE CLEANER ==> ${alchemyAPIResponse}`);
  const transfersArr: any = alchemyAPIResponse;
  let tempArr: CleanedAlchemyERC20TransferHistoryEntry[] = [];
  transfersArr.map((x: transferEntry) => {
    tempArr.push({
      hash: x.hash,
      from: x.from,
      to: x.to,
      tokenName: x.asset,
      realTokenAmount: (
        BigNumber.from(x.rawContract.value)
          .div(
            BigNumber.from(10).pow(BigNumber.from(x.rawContract.decimal).sub(2))
          )
          .toNumber() /
        10 ** 2
      ).toString(),
    });
  });
  return tempArr;
};
