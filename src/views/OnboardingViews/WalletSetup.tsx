import { Box, Text, Flex } from 'native-base';
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
import { Dimensions } from 'react-native';

export const WalletSetup = observer(({ navigation }: ILandingNavProps) => {
  let [loading, setLoading] = useState(false);
  const { height } = Dimensions.get('window');

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
    <Box safeAreaTop bgColor='background.100'>
      <BackButton
        // marginTop='0'
        onPress={backButtonPayload}
        marginRight={height < 800 ? '300' : '5/6'}
        // marginBottom='1/5'
      />
      <Flex
        // backgroundColor='primary.100'
        height='full'
        alignItems='center'
        // style={{ display: 'flex', justifyContent: 'center' }}
      >
        {/* <Box backgroundColor='primary.100'> */}
        <Text
          marginTop={height < 800 ? 15 : 35}
          lineHeight={'md'}
          // color='primary.300'
          fontSize='3xl'
          marginBottom={height < 800 ? '3/6' : '470'}
          fontWeight='semibold'
        >
          Wallet Setup
        </Text>
        {/* </Box> */}
        <OutlinedButton
          onPress={recoverWalletPayload}
          text='Recover Your Wallet'
          marginTop={height < 800 ? '200' : '0'}
          // marginBottom='10'
        />
        <ContainedButton
          onPress={createWalletPayload}
          marginTop='10'
          text='Create Your Wallet'
          disabled={LoadingStore.loading}
          marginBottom='0'
        />
      </Flex>
      {/* <Center height='full' bgColor='background.100'>
        {loading && (
          <>
            <Spinner />
          </>
        )}
        {!loading && (
          <> */}
      {/* </>
        )}
      </Center> */}
    </Box>
  );
});
