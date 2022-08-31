import { BigNumber } from 'ethers';

export const TokenBalanceFormatter = (balance: string, decimal: number) => {
  const decimals = balance.slice(
    balance.length - decimal,
    balance.length + decimal
  );
  const value = BigNumber.from(balance)
    .div(BigNumber.from(10).pow(decimal))
    .toString();
  const combinedVal = `${value}.${decimals}`;
  console.log(combinedVal);
  return combinedVal;
};
