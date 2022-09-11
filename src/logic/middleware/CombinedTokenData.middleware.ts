import { coinGeckoPriceCleaner } from './CoinGeckoPrices.middleware';
import { alchemyTokenBalancesCleaner } from './AlchemyTokenBalances.middleware';
import { CoinGeckoTokenPriceList } from '../models/ext_models';
import { TokenBalancesResponse } from 'alchemy-sdk';
import {
  CombinedTokenData,
  CombinedTokenDataEntry,
} from '../models/int_models';
import { mainTokenSvgArr, TOKEN_NAMES_LIST } from '../constants';

export const CombinedTokenDataCleaner = (
  coinGeckoResponse: CoinGeckoTokenPriceList,
  alchemyAPIResponse: TokenBalancesResponse
) => {
  if (!alchemyAPIResponse) {
    return;
  }
  const alchemyData = alchemyTokenBalancesCleaner(alchemyAPIResponse);
  const tempObj = JSON.parse(JSON.stringify(alchemyData));
  const priceObj = coinGeckoPriceCleaner(coinGeckoResponse);
  const pricesArr = Object.values(priceObj).map((object) => {
    return object.price;
  });
  // alert(svgArr);
  for (let i = 0; i < Object.keys(coinGeckoResponse).length; i++) {
    tempObj[TOKEN_NAMES_LIST[i]].icon = mainTokenSvgArr[i];
    tempObj[TOKEN_NAMES_LIST[i]].price = pricesArr[i].toFixed(2);
    tempObj[TOKEN_NAMES_LIST[i]].name = TOKEN_NAMES_LIST[i];
    tempObj[TOKEN_NAMES_LIST[i]].key = TOKEN_NAMES_LIST[i];
  }
  // console.log(tempObj, '<===== Combined Temp Obj');
  const tempArr = Object.values(tempObj);
  // console.log(tempArr, '<===== Combined Temp Arr');
  return tempArr as CombinedTokenDataEntry[];
};

// so here's how I'm thing
