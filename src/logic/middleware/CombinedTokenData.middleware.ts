import { coinGeckoPriceCleaner } from './CoinGeckoPrices.middleware';
import { alchemyTokenBalancesCleaner } from './AlchemyTokenBalances.middleware';
import { CoinGeckoTokenPriceList } from '../models/ext_models';
import { TokenBalancesResponse } from 'alchemy-sdk';
import { TOKEN_NAMES_LIST } from '../constants';

export const TokenDataCleaner = (
  coinGeckoResponse: CoinGeckoTokenPriceList,
  alchemyAPIResponse: TokenBalancesResponse
) => {
  const alchemyData = alchemyTokenBalancesCleaner(alchemyAPIResponse);
  const tempObj = JSON.parse(JSON.stringify(alchemyData));
  const priceObj = coinGeckoPriceCleaner(coinGeckoResponse);
  const pricesArr = Object.values(priceObj).map((object) => {
    return object.price;
  });

  for (let i = 0; i < Object.keys(coinGeckoResponse).length; i++) {
    tempObj[TOKEN_NAMES_LIST[i]].price = pricesArr[i];
  }
  return tempObj;
};
