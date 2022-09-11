import { arrayEntry, ILandingNavProps } from '../../logic/models/int_models';
import { Box, Text, View, Center, Flex } from 'native-base';
import { walletSetupActions } from '../../logic/actions';
import { BackButton } from '../../components/BackButton';
import { MnemonicGenStore } from '../../logic/stores';
import { ButtonList } from '../../components/ButtonList';
import { ContainedButton } from '../../components/ContainedButton';
import { reaction } from 'mobx';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Dimensions } from 'react-native';

export const InsertDummyWord = observer(({ navigation }: ILandingNavProps) => {
  const { height } = Dimensions.get('window');
  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToFirstWalletCreationStage();
    navigation.navigate('GenerateMnemonic');
    MnemonicGenStore.setReplacementWordBool(false);
    MnemonicGenStore.selectDummyWord('');
  };

  const [_, setReplacementWord] = useState(false);

  const replacementWordIsSelected = reaction(
    () => MnemonicGenStore.replacementWordIsSelected,
    () => {
      if (MnemonicGenStore.replacementWordIsSelected === true) {
        setReplacementWord(true);
      } else {
        setReplacementWord(false);
      }
    }
  );

  useEffect(
    () => replacementWordIsSelected,
    [MnemonicGenStore.replacementWordIsSelected]
  );

  const nextButtonPayload = () => {
    walletSetupActions.moveForwardToThirdWalletCreationStage();
    navigation.navigate('BackupMnemonic');
    MnemonicGenStore.generateFakeCompositeMnemonic();
  };
  return (
    <Box safeArea bgColor='background.100'>
      <Flex alignItems='center' height='full' bgColor='background.100'>
        <BackButton onPress={backButtonPayload} />
        <Text
          marginTop={height < 800 ? '50' : '100'}
          marginBottom={height < 800 ? '25' : '50'}
          fontSize='3xl'
          fontWeight='semibold'
          // marginTop='1/5'
          paddingBottom='15'
          textAlign='center'
        >
          Choose Your Dummy Word
        </Text>
        <ButtonList array={MnemonicGenStore.replacementMnemonicFragment} />
        <ContainedButton
          marginTop={height < 800 ? '3/5' : '200'}
          text='Backup Mnemonic'
          onPress={nextButtonPayload}
          disabled={!MnemonicGenStore.replacementWordIsSelected}
        />
        <Box marginBottom='55' />
      </Flex>
    </Box>
  );
});
