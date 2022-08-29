import { TokenNameListType } from './TokenList.model';

export interface CleanedAlchemyData {
  decimals: number;
  balance: string;
  contractAddress: string;
}

export type CleanedAlchemyTokenBalances = {
  [key in TokenNameListType]: CleanedAlchemyData;
};
