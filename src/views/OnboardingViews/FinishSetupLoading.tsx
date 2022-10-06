import { Center, Spinner, Text } from 'native-base';
import { useEffect } from 'react';
import { ILandingNavProps } from '../../logic/models/int_models';
import { save } from '../../logic/utils';
import { MnemonicGenStore } from '../../logic/stores';
import { HDNode } from 'ethers/lib/utils';
import { usePostHog } from 'posthog-react-native';
import { supabase } from '../../logic/services';
import { invokeEdgeFunction } from '../../logic/services';

export const FinishSetupLoading = ({ navigation }: ILandingNavProps) => {
  const postHog = usePostHog();
  useEffect(() => {
    (async () => {
      await save('pk', MnemonicGenStore.prodMnemonic);
      // @ts-ignore
      const wallet: HDNode = HDNode.recoverWallet(
        MnemonicGenStore.prodMnemonic
      );
      await invokeEdgeFunction('register-user', {
        address: wallet.address,
      });
      postHog?.identify(wallet.address);
      await save('realPk', wallet.privateKey);
      navigation.navigate('FinishSetup');
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
