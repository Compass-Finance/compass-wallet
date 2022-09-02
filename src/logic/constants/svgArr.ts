import { Usdc, Renbtc, Weth, Dai } from '../../../assets/token_icons';
import {
  Usdc_deposit,
  Renbtc_deposit,
  Weth_deposit,
  Dai_deposit,
  Unknown_deposit,
} from '../../../assets/token_icons/deposit_icons';
import {
  Usdc_withdrawl,
  Renbtc_withdrawl,
  Weth_withdrawl,
  Dai_withdrawl,
  Unknown_withdrawl,
} from '../../../assets/token_icons/withdrawl_icons';

export const mainTokenSvgArr = [Dai, Renbtc, Usdc, Weth];

export const depositsAndWithdrawlsTokenSvgObj = {
  deposits: {
    dai: Dai_deposit,
    renbtc: Renbtc_deposit,
    unknown: Unknown_deposit,
    usdc: Usdc_deposit,
    weth: Weth_deposit,
  },
  withdrawls: {
    dai: Dai_withdrawl,
    renbtc: Renbtc_withdrawl,
    unknown: Unknown_withdrawl,
    usdc: Usdc_withdrawl,
    weth: Weth_withdrawl,
  },
};
