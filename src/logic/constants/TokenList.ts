import { TokenList } from '../models/int_models';
// for reference
const MaticMainnetTokenListData: TokenList = {
  dai: {
    contractAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    decimals: 18,
  },
  matic: {
    contractAddress: '0x0000000000000000000000000000000000001010',
    decimals: 18,
  },
  renbtc: {
    contractAddress: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
    decimals: 8,
  },
  usdc: {
    contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    decimals: 6,
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
  '0x0000000000000000000000000000000000001010',
  // ^^ MATIC
  '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  // ^^ RenBTC
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  // ^^ USDC
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  // ^^ WETH
];

const COIN_GECKO_TOKEN_IDS = [
  'dai',
  'matic-network',
  'renbtc',
  'usd-coin',
  'weth',
];

export const COIN_GECKO_API_QUERY_STRING = COIN_GECKO_TOKEN_IDS.join('%2C');
console.log(COIN_GECKO_API_QUERY_STRING);

export const TOKEN_DECIMALS_LIST = [
  18,
  // ^^ DAI
  18,
  // ^^ MATIC
  8,
  // ^^ RenBTC
  6,
  // ^^ USDC
  18,
  // ^^ WETH
];

export const TOKEN_NAMES_LIST = ['dai', 'matic', 'renbtc', 'usdc', 'weth'];

export const starterTempObj = {
  dai: {},
  matic: {},
  renbtc: {},
  usdc: {},
  weth: {},
};
