import { Center, Spinner, Text } from 'native-base';
import { useEffect } from 'react';
import { ILandingNavProps } from '../../logic/models/int_models';
import { save } from '../../logic/utils';
import { HDNode } from 'ethers/lib/utils';
import { RecoverWalletStore } from '../../logic/stores';

export const FinishRecoveryLoading = ({ navigation }: ILandingNavProps) => {
  useEffect(() => {
    (async () => {
      await save('pk', RecoverWalletStore.realCompositeMnemonic);
      // @ts-ignore
      const wallet = HDNode.recoverWallet(
        RecoverWalletStore.realCompositeMnemonic
      );
      await save('realPk', wallet.privateKey);
      RecoverWalletStore.wipeTheStore();
      navigation.navigate('FinishRecovery');
    })();
  }, []);
  return (
    <Center
      safeArea
      alignItems='center'
      height='full'
      backgroundColor='background.100'
    >
      <Spinner color='primary.100' size='lg' padding={3} />
      <Text fontSize='md' textAlign='center' padding='5' fontWeight='semibold'>
        Setting Up Your Wallet
      </Text>
    </Center>
  );
};
