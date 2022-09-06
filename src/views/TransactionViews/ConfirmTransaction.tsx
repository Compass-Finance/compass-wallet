import { Wallet, providers } from 'ethers';
import { Text, Box } from 'native-base';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { TxnBackButton } from '../../components/TxnBackButton';
import { TxnFlowButton } from '../../components/TxnFlowButton';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { LoadedWalletStore, NewTransactionStore } from '../../logic/stores';
import { getValueFor, sendTokens } from '../../logic/utils';
import { useState } from 'react';
import { HDNode } from 'ethers/lib/utils';

export const ConfirmTransaction = ({ navigation }: IAssetsNavProps) => {
  const { height } = Dimensions.get('window');
  const transferInput = NewTransactionStore.hrTransferAmount;
  const tokenPrice = NewTransactionStore.selectedTokenData.price;
  const tokenName = NewTransactionStore.selectedTokenData.name;
  const recipientAddress = NewTransactionStore.txnReadyAddress;
  const contractAddress = NewTransactionStore.selectedTokenData.contractAddress;
  const txnReadyAmount = NewTransactionStore.txnReadyTransferAmt;
  const [wallet, setWallet] = useState('');
  useEffect(() => {
    const something = async () => {
      const pk = await getValueFor('realPk');
      console.log(pk, '<===== pk top');
    };
    something();
  });
  return (
    <Box safeAreaTop safeAreaBottom backgroundColor='primary.100' height='full'>
      <TxnBackButton
        payload={() => {
          navigation.navigate('SelectAddressView');
        }}
      />
      <Text
        lineHeight={60}
        padding='0'
        marginTop='5'
        fontSize='3xl'
        color='white'
        textAlign='center'
        fontWeight='bold'
      >
        Transaction Overview
      </Text>

      <Box
        borderRadius='18'
        backgroundColor='primary.300'
        marginTop='25'
        // height='100'
        padding='5'
        marginX='5'
      >
        <Text
          paddingTop='25'
          paddingBottom='15'
          fontWeight='semibold'
          color='white'
          fontSize='xl'
        >
          Amount: {transferInput} {tokenName.toUpperCase()} /{' '}
          {(Number(transferInput) * Number(tokenPrice)).toFixed(2)} USD
        </Text>
        <Text fontWeight='semibold' color='white' fontSize='xl'>
          To:{' '}
          {`${recipientAddress.substring(0, 5)}...${recipientAddress.substring(
            38,
            42
          )}`}
        </Text>
        <Text
          paddingBottom={25}
          color='white'
          fontWeight='bold'
          fontSize={height < 800 ? '2xs' : 'xs'}
        >
          {NewTransactionStore.txnReadyAddress}
        </Text>
      </Box>
      <Box height={height < 800 ? 220 : 350} />
      <TxnFlowButton
        text='Send Transaction'
        disabled={false}
        payload={async () => {
          try {
            const pk = await getValueFor('pk');
            const hdNode = HDNode.fromMnemonic(pk);
            const jsonRpc = new providers.JsonRpcBatchProvider(
              LoadedWalletStore.maticRPC
            );
            const wallet = new Wallet(hdNode.privateKey).connect(jsonRpc);
            sendTokens(
              contractAddress,
              txnReadyAmount,
              recipientAddress,
              wallet
            );
            navigation.navigate('TransactionSent');
          } catch (e) {
            alert(e);
          }
        }}
        fontSize='lg'
        width='210'
      />
    </Box>
  );
};
