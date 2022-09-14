import { TokenNameListType } from '../int_models/TokenList.model';

interface tokenPriceEntry {
  usd: number;
}

export type CoinGeckoTokenPriceList = {
  [key in TokenNameListType]: tokenPriceEntry;
};
