import { AssetsStore } from '../stores';
import { CombinedTokenDataCleaner } from '../middleware';
import { CoinGeckoPriceGetter } from '../services';
import { alchemyTokenBalanceGetter } from '../services';
import { TokenBalancesResponse } from 'alchemy-sdk';
import {
  CombinedTokenData,
  CombinedTokenDataEntry,
} from '../models/int_models';

export const setTokenDataArr = async () => {
  try {
    const alchemyResponse = await alchemyTokenBalanceGetter();
    const coinGeckoResponse = await CoinGeckoPriceGetter();
    const combinedData = CombinedTokenDataCleaner(
      coinGeckoResponse,
      alchemyResponse as TokenBalancesResponse
    );
    AssetsStore.setTokenDataArr(combinedData as CombinedTokenDataEntry[]); // <== fix ths
    console.log('ASSETS STORE ===>', AssetsStore.tokenDataArr);
    return combinedData;
  } catch (e) {
    alert(e);
  }
};

export const setSelectedTokenData = (
  tokenName: string,
  sendOrReceive: 'send' | 'receive'
) => {
  AssetsStore.setSelectedTokenData(tokenName, sendOrReceive);
};
