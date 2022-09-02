// How does this look?
import { depositsAndWithdrawlsTokenSvgObj } from '../constants';

// take in 2 args ===> let's strict type this to token names
export const getDepositOrWithdrawlSvg = (
  name: string,
  depositsOrWithdrawls: 'deposits' | 'withdrawls'
) => {
  const svgResult =
    // @ts-ignore
    depositsAndWithdrawlsTokenSvgObj[depositsOrWithdrawls][
      name.toLowerCase()
    ] ?? depositsAndWithdrawlsTokenSvgObj[depositsOrWithdrawls]['unknown'];
  return svgResult;
};
