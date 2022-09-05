import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { TokenNameListType } from './TokenList.model';
export interface CombinedTokenDataEntry {
  key: string;
  price: string; //
  decimals: number;
  balance: string;
  name: string;
  icon: FC<SvgProps>;
  contractAddress: string;
}

export type CombinedTokenData = {
  [key in TokenNameListType]: CombinedTokenDataEntry;
};
