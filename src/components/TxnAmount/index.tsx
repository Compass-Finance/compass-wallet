import { Text } from 'native-base';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { reaction } from 'mobx';
import { NewTransactionStore } from '../../logic/stores';

export const TxnAmount = observer(() => {
  const [fontSize, setFontSize] = useState(['6xl', '3xl']);
  const transferInput = NewTransactionStore.hrTransferAmount;
  const tokenPrice = NewTransactionStore.selectedTokenData.price;
  const tokenName = NewTransactionStore.selectedTokenData.name;
  const nativeHumanReadableTokenBalance =
    NewTransactionStore.selectedTokenData.nativeBalanceReadable;

  const fontSizeAdjuster = reaction(
    () => NewTransactionStore.hrTransferAmount,
    () => {
      const amount = NewTransactionStore.hrTransferAmount;

      if (amount.length + tokenName.length < 10) {
        setFontSize(['6xl', '3xl']);
      } else if (amount.length + tokenName.length < 13) {
        setFontSize(['5xl', '3xl']);
      } else if (amount.length + tokenName.length < 16) {
        setFontSize(['4xl', '3xl']);
      } else if (amount.length + tokenName.length < 19) {
        setFontSize(['3xl', '3xl']);
      } else if (amount.length + tokenName.length < 21) {
        setFontSize(['2xl', '3xl']);
      } else if (amount.length + tokenName.length < 24) {
        setFontSize(['xl', '3xl']);
      }
    }
  );

  useEffect(fontSizeAdjuster, [fontSize]);
  return (
    <>
      <Text
        lineHeight={30}
        opacity={75}
        fontSize={fontSize[1]}
        color='white'
        fontWeight='bold'
      >
        {(Number(transferInput) * Number(tokenPrice)).toFixed(2)} USD
      </Text>
      <Text
        lineHeight={60}
        padding='0'
        margin='0'
        fontSize={fontSize[0]}
        color='white'
        fontWeight='bold'
      >
        {transferInput} {tokenName && tokenName.toUpperCase()}
      </Text>
      <Text color='white' fontSize='md' fontWeight='semibold'>
        Total {tokenName && tokenName.toUpperCase()}:{' '}
        {nativeHumanReadableTokenBalance}
      </Text>
    </>
  );
});
