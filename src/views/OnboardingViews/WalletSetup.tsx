import { Box, Text, Flex, Button, Spinner, Center } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { BackButton } from '../../components/BackButton';
import { OutlinedButton } from '../../components/OutlinedButton';
import { walletSetupActions } from '../../logic/actions';
import { mnemonicGenActions } from '../../logic/actions';
import { LoadingStore, MnemonicGenStore } from '../../logic/stores';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { createWallet } from 'react-native-web3-wallet';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { wait } from '../../logic/utils';

export const WalletSetup = observer(({ navigation }: ILandingNavProps) => {
  const [loading, setLoading] = useState(false);
  const { height } = Dimensions.get('window');

  // const loadingLogic = reaction(
  //   () => MnemonicGenStore.loading,
  //   () => {
  //     if (MnemonicGenStore.loading === true) {
  //       setLoading(true);
  //     } else {
  //       setLoading(false);
  //     }
  //   }
  // );

  // useEffect(() => loadingLogic, [LoadingStore.loading]);

  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToFirstUndecidedStage();
    navigation.navigate('LandingView');
  };
  const createWalletPayload = () => {
    // const newWallet = createWallet('', "m/44'/60'/0'/0/0").then((value) => {
    //   return value.mnemonic;
    // });
    // console.log(newWallet);
    mnemonicGenActions.populateMnemonicArray();
    walletSetupActions.moveForwardToFirstWalletCreationStage();
    navigation.navigate('GenerateMnemonic');
  };

  const recoverWalletPayload = () => {
    walletSetupActions.moveForwardToFirstRecoveryStage();
    navigation.navigate('RecoverWallet');
  };

  if (loading === true) {
    return (
      <Center
        safeAreaTop
        justifyContent='center'
        alignItems={'center'}
        height='full'
      >
        <Spinner size='lg' color='primary.100' />
        <Text
          fontSize='xl'
          fontWeight='semibold'
          textAlign='center'
          padding='3'
        >
          Generating your wallet. This will take 6-10 seconds
        </Text>
      </Center>
    );
  } else {
    return (
      <Box safeAreaTop bgColor='background.100'>
        <BackButton
          onPress={backButtonPayload}
          marginRight={height < 800 ? '300' : '5/6'}
        />
        <Flex height='full' alignItems='center'>
          <Text
            marginTop={height < 800 ? 15 : 35}
            lineHeight={'md'}
            fontSize='3xl'
            marginBottom={height < 800 ? '3/6' : '470'}
            fontWeight='semibold'
          >
            Wallet Setup
          </Text>
          <OutlinedButton
            onPress={recoverWalletPayload}
            text='Recover Your Wallet'
            marginTop={height < 800 ? '200' : '0'}
          />
          <ContainedButton
            onPress={createWalletPayload}
            marginTop='10'
            text='Create Your Wallet'
            disabled={LoadingStore.loading}
            marginBottom='0'
          />
        </Flex>
      </Box>
    );
  }
});
