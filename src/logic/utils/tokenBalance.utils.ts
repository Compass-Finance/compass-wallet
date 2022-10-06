import { BigNumber } from 'ethers';

export const TokenBalanceFormatter = (balance: string, decimal: number) => {
  // console.log(balance.length, decimal);
  let formattedValue;
  if (balance.length < decimal) {
    const difference = decimal - balance.length;
    const leadingZeros = '0'.repeat(difference);
    // console.log(leadingZeros);
    formattedValue = '.' + balance;
    formattedValue = Number(formattedValue) / (10 ** difference + 1);
  } else {
    const balanceArr = balance.split('');
    balanceArr.splice(balanceArr.length - decimal, 0, '.');
    formattedValue = balanceArr.join('');
    Number(formattedValue);
  }
  return formattedValue;
};

export function toBaseUnit(value: string, decimals: number) {
  const ten = BigNumber.from(10);
  const base = ten.pow(BigNumber.from(decimals));

  if (value === '.') {
    throw new Error(
      `Invalid value ${value} cannot be converted to` +
        ` base unit with ${decimals} decimals.`
    );
  }

  // Split it into a whole and fractional part
  let comps = value.split('.');
  if (comps.length > 2) {
    throw new Error('Too many decimal points');
  }

  let whole: string | BigNumber = comps[0];
  let fraction: string | BigNumber = comps[1];

  if (!whole) {
    whole = '0';
  }
  if (!fraction) {
    fraction = '0';
  }
  if (fraction.length > decimals) {
    throw new Error('Too many decimal places');
  }

  while (fraction.length < decimals) {
    fraction += '0';
  }

  whole = BigNumber.from(whole);
  fraction = BigNumber.from(fraction);
  let wei = whole.mul(base).add(fraction);
  // console.log(BigNumber.from(wei.toString()).toString());
  return BigNumber.from(wei.toString()).toString();
}
