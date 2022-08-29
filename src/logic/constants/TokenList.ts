import { TokenList } from '../models/int_models';
// for reference
const MaticMainnetTokenListData: TokenList = {
  dai: {
    contractAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    decimals: 18,
  },
  renbtc: {
    contractAddress: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
    decimals: 8,
  },
  weth: {
    contractAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    decimals: 18,
  },
};

// ! important make sure all tokens listed follow alphabetical ordering.
export const TOKEN_CONTRACT_ADDRESSES_LIST = [
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  // ^^ DAI
  '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  // ^^ RenBTC
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  // ^^ WETH
];

export const TOKEN_DECIMALS_LIST = [
  18,
  // ^^ DAI
  8,
  // ^^ RenBTC
  18,
  // ^^ WETH
];

export const TOKEN_NAMES_LIST = ['dai', 'renbtc', 'weth'];

export const starterTempObj = {
  dai: {},
  renbtc: {},
  weth: {},
};
