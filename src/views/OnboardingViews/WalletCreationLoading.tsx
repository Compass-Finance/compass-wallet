import { Center, Spinner, Text } from 'native-base';
import { useEffect } from 'react';
import { ILandingNavProps } from '../../logic/models/int_models';
import { mnemonicGenActions } from '../../logic/actions';
import { wait } from '../../logic/utils';

export const WalletCreationLoading = ({ navigation }: ILandingNavProps) => {
  useEffect(() => {
    wait(0).then(() => {
      mnemonicGenActions.populateMnemonicArray();
      navigation.navigate('GenerateMnemonic');
    });
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
        Creating Your Wallet
      </Text>
    </Center>
  );
};
