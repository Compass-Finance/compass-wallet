import { starterTempObj, TOKEN_NAMES_LIST } from '../constants';
import { CoinGeckoTokenPriceList } from '../models/ext_models';
import {
  CleanedCoinGeckoPrices,
  TokenNameListType,
} from '../models/int_models';

export const coinGeckoPriceCleaner = (
  coinGeckoResponse: CoinGeckoTokenPriceList
) => {
  const tempObj = JSON.parse(JSON.stringify(starterTempObj));
  const pricesArr: number[] = [];

  const sortedCoinGeckoCoinNames = Object.keys(
    coinGeckoResponse
  ).sort() as TokenNameListType[];
  // console.log(sortedCoinGeckoCoinNames, '<====== sorted coin names');

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    pricesArr.push(coinGeckoResponse[sortedCoinGeckoCoinNames[i]].usd);
  }
  // console.log(`The prices arr ====> ${pricesArr}`);

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    // console.log(pricesArr[i].toFixed(2), '<===== math thing');
    Number(pricesArr[i].toFixed(2));
  }

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    tempObj[TOKEN_NAMES_LIST[i]].price = Number(pricesArr[i].toFixed(2));
  }
  // console.log(tempObj, '<====== COIN GECKO RESPONSE');
  return tempObj as CleanedCoinGeckoPrices;
};
