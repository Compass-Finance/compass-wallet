import { erc20HistoryResponse } from '../models/ext_models';
import { BigNumber } from 'ethers';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../models/int_models';

// TODO @dev: This is not fully complete, you'll need to add a short circuit branch for if a certain type
// *       like an empty string is returned, and that will be done at the service layer.
// *       so it will be handled without throwing an error and if the response fails for whatever reason.
// *       without throwing errors, so make sure to add that
export const txnCleaner = (
  alchemyAPIResponse: erc20HistoryResponse
): CleanedAlchemyERC20TransferHistoryEntry[] => {
  // logic
  const transfersArr = alchemyAPIResponse.transfers;
  let tempArr: CleanedAlchemyERC20TransferHistoryEntry[] = [];

  transfersArr.map((x) => {
    tempArr.push({
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
  console.log(BigNumber.from(5).div(2).toString());
  console.log(tempArr);
  return tempArr;
};
