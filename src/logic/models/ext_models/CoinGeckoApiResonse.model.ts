interface tokenPriceEntry {
  usd: number;
}

export interface CoinGeckoTokenPriceList {
  dai: tokenPriceEntry;
  weth: tokenPriceEntry;
  renbtc: tokenPriceEntry;
}
