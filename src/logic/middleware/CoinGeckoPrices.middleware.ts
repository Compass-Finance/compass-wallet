import { starterTempObj, TOKEN_NAMES_LIST } from '../constants';
import { CoinGeckoTokenPriceList } from '../models/ext_models';
import { CleanedCoinGeckoPrices } from '../models/int_models';

export const coinGeckoPriceCleaner = (
  coinGeckoResponse: CoinGeckoTokenPriceList
) => {
  const tempObj = JSON.parse(JSON.stringify(starterTempObj));
  const pricesArr: number[] = [];

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    const simplifiedPricesArr = Object.values(coinGeckoResponse);
    pricesArr.push(simplifiedPricesArr[i].usd);
  }
  // console.log('Prices Arr =======>', pricesArr);

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    // console.log(pricesArr[i].toFixed(2), '<===== math thing');
    Number(pricesArr[i].toFixed(2));
  }

  for (let i = 0; i < Object.keys(tempObj).length; i++) {
    tempObj[TOKEN_NAMES_LIST[i]].price = Number(pricesArr[i].toFixed(2));
  }
  console.log(tempObj, 'COIN GECO RESPONSE');
  return tempObj as CleanedCoinGeckoPrices;
};
