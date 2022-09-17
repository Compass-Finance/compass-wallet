import { Box, Text, Flex, Spinner, Center } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { BackButton } from '../../components/BackButton';
import { OutlinedButton } from '../../components/OutlinedButton';
import { LoadingStore } from '../../logic/stores';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Dimensions } from 'react-native';

export const WalletSetup = observer(({ navigation }: ILandingNavProps) => {
  const [loading, setLoading] = useState(false);
  const { height } = Dimensions.get('window');

  const backButtonPayload = () => {
    navigation.navigate('LandingView');
  };
  const createWalletPayload = () => {
    navigation.navigate('WalletCreationLoading');
  };

  const recoverWalletPayload = () => {
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
