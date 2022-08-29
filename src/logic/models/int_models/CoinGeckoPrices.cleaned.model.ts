import { TokenNameListType } from './TokenList.model';

interface CleanedCoinGeckoData {
  price: number;
}

export type CleanedCoinGeckoPrices = {
  [key in TokenNameListType]: CleanedCoinGeckoData;
};
