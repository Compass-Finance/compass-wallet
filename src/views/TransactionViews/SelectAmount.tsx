import { Box, Center, Text, Select } from 'native-base';
import { Dimensions } from 'react-native';
import { NumberPad } from '../../components/NumberPad';
import { TxnAmount } from '../../components/TxnAmount';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { useState } from 'react';
import { newTxnActions } from '../../logic/actions';
import { NewTransactionStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { toBaseUnit } from '../../logic/utils';
import { observer } from 'mobx-react-lite';

export const SelectAmount = observer(({ navigation }: IAssetsNavProps) => {
  // how we need to make this page reactive
  //

  const [isValidAmount, setIsValidAmount] = useState(true);

  reaction(
    () => NewTransactionStore.hrTransferAmount,
    () => {
      const humanReadableTransferInput = Number(
        NewTransactionStore.hrTransferAmount
      );
      const wholeTokenBalance =
        NewTransactionStore.selectedTokenData.nativeBalanceReadable;
      if (
        humanReadableTransferInput <= wholeTokenBalance &&
        humanReadableTransferInput > 0
      ) {
        console.log('is a valid amount');
        setIsValidAmount(false);
      } else {
        setIsValidAmount(true);
        console.log(`isn't a valid amount`);
      }
    }
  );

  const { height } = Dimensions.get('window');
  return (
    <Box
      safeAreaTop={true}
      safeAreaBottom={true}
      backgroundColor='primary.100'
      height='full'
      // width='100%'
    >
      <TxnBackButton
        payload={() => {
          navigation.navigate('HomeTabRouter');
        }}
      />
      <Center>
        <Box
          display='flex'
          alignItems='center'
          marginTop={height < 800 ? 10 : 100}
          marginBottom='30'
        >
          <TxnAmount />
        </Box>
        <NumberPad />
        <Box marginTop={47} />
        <TxnFlowButton
          disabled={isValidAmount}
          payload={() => {
            const formattedAmount = toBaseUnit(
              NewTransactionStore.hrTransferAmount,
              NewTransactionStore.selectedTokenData.decimals
            );
            newTxnActions.setTxnReadyTransferAmt(formattedAmount);
            // console.log(
            //   NewTransactionStore.txnReadyTransferAmt,
            //   '<==== Production transfer amount'
            // );
            navigation.navigate('SelectAddressView', {});
          }}
        />
      </Center>
    </Box>
  );
});
