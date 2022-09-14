import { Usdc, Renbtc, Weth, Dai, Matic } from '../../../assets/token_icons';
import {
  Usdc_deposit,
  Matic_deposit,
  Renbtc_deposit,
  Weth_deposit,
  Dai_deposit,
  Unknown_deposit,
} from '../../../assets/token_icons/deposit_icons';
import {
  Usdc_withdrawl,
  Matic_withdrawl,
  Renbtc_withdrawl,
  Weth_withdrawl,
  Dai_withdrawl,
  Unknown_withdrawl,
} from '../../../assets/token_icons/withdrawl_icons';

export const mainTokenSvgArr = [Dai, Matic, Renbtc, Usdc, Weth];

export const depositsAndWithdrawlsTokenSvgObj = {
  deposits: {
    dai: Dai_deposit,
    matic: Matic_deposit,
    renbtc: Renbtc_deposit,
    unknown: Unknown_deposit,
    usdc: Usdc_deposit,
    weth: Weth_deposit,
  },
  withdrawls: {
    dai: Dai_withdrawl,
    matic: Matic_withdrawl,
    renbtc: Renbtc_withdrawl,
    unknown: Unknown_withdrawl,
    usdc: Usdc_withdrawl,
    weth: Weth_withdrawl,
  },
};
