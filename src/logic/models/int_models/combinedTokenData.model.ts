import { TokenNameListType } from './TokenList.model';
export interface CombinedTokenDataEntry {
  price: number;
  decimals: number;
  balance: string;
  contractAddress: string;
}

export type CombinedTokenData = {
  [key in TokenNameListType]: CombinedTokenDataEntry;
};
