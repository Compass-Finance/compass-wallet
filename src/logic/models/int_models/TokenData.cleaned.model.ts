import { TokenNameListType } from './TokenList.model';

export interface TokenEntry {
  contractAddress: string;
  decimals: number;
}

export interface CleanedTokenEntry {
  price: number;
  contractAddress: string;
  decimals: number;
  balance: string;
}

export type TokenList = {
  [key in TokenNameListType]: TokenEntry;
};

export type CleanedTokenData = {
  [key in TokenNameListType]: CleanedTokenEntry;
};
