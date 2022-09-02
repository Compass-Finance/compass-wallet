import { Box, View, Center, Text, Button, Spinner } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { BackButton } from '../../components/BackButton';
import { OutlinedButton } from '../../components/OutlinedButton';
import { walletSetupActions } from '../../logic/actions';
import { mnemonicGenActions } from '../../logic/actions';
import { LoadingStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

export const WalletSetup = observer(({ navigation }: ILandingNavProps) => {
  let [loading, setLoading] = useState(false);

  const loadingLogic = reaction(
    () => LoadingStore.loading,
    () => {
      if (!LoadingStore.loading) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    }
  );

  useEffect(() => loadingLogic, [LoadingStore.loading]);

  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToFirstUndecidedStage();
    navigation.navigate('LandingView');
  };
  const createWalletPayload = () => {
    mnemonicGenActions.populateMnemonicArray();
    walletSetupActions.moveForwardToFirstWalletCreationStage();
    navigation.navigate('GenerateMnemonic');
  };

  const recoverWalletPayload = () => {
    walletSetupActions.moveForwardToFirstRecoveryStage();
    navigation.navigate('RecoverWallet');
  };
  return (
    <Box safeArea bgColor='background.100'>
      <Center height='full' bgColor='#FFF5DA'>
        <BackButton
          // marginTop='0'
          onPress={backButtonPayload}
          marginRight='4/6'
          marginBottom='1/5'
        />
        {loading && (
          <>
            <Spinner />
          </>
        )}
        {!loading && (
          <>
            <Text fontSize='3xl' marginBottom='1/4' fontWeight='semibold'>
              Wallet Setup
            </Text>
            <OutlinedButton
              onPress={recoverWalletPayload}
              text='Recover Your Wallet'
              marginTop='4/6'
              // marginBottom='10'
            />
            <ContainedButton
              onPress={createWalletPayload}
              marginTop='10'
              text='Create Your Wallet'
              disabled={LoadingStore.loading}
              marginBottom='10'
            />
          </>
        )}
      </Center>
    </Box>
  );
});
