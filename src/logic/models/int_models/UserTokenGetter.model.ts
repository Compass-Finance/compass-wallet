import { SvgProps } from 'react-native-svg';
import { TokenNameListType } from './TokenList.model';
import { FC } from 'react';

export interface UserTokenDataResEntry {
  name: TokenNameListType;
  price: number;
  key: TokenNameListType;
  decimals: number;
  contractAddress: string;
  hexNativeBalance: string;
  HRNativeBalance: string;
  HRUSDBalance: string;
  svg: FC<SvgProps>;
}

export type UserTokenDataResArr = UserTokenDataResEntry[];
