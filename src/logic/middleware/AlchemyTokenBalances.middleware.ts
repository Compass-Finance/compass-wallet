import { TokenBalancesResponse } from 'alchemy-sdk';
import {
  starterTempObj,
  TOKEN_NAMES_LIST,
  TOKEN_DECIMALS_LIST,
} from '../constants';
import { CleanedAlchemyTokenBalances } from '../models/int_models';

export const alchemyTokenBalancesCleaner = (
  alchemyAPIResponse: TokenBalancesResponse
) => {
  const tokenData = alchemyAPIResponse.tokenBalances;
  const tempObj = JSON.parse(JSON.stringify(starterTempObj));

  const tokenContractsArr: string[] = [];
  const tokenBalancesHexArr: string[] = [];

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    tokenContractsArr.push(tokenData[i].contractAddress);

    tokenBalancesHexArr.push(
      tokenData[i].tokenBalance ||
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    );
  }

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    tempObj[TOKEN_NAMES_LIST[i]].contractAddress = tokenContractsArr[i];
    tempObj[TOKEN_NAMES_LIST[i]].balance = tokenBalancesHexArr[i];
    tempObj[TOKEN_NAMES_LIST[i]].decimals = TOKEN_DECIMALS_LIST[i];
  }
  return tempObj as CleanedAlchemyTokenBalances; // create the type for this one as well
};
