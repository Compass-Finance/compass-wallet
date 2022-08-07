import { arrayEntry, ILandingNavProps } from '../logic/models/int_models';
import { Text, View, Center } from 'native-base';
import { walletSetupActions } from '../logic/actions';
import { BackButton } from '../components/BackButton';
import { MnemonicGenStore } from '../logic/stores';
import { ButtonList } from '../components/ButtonList';
import { ContainedButton } from '../components/ContainedButton';
import { reaction } from 'mobx';
import { useEffect, useState } from 'react';

export const InsertDummyWord = ({ navigation }: ILandingNavProps) => {
  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToFirstWalletCreationStage();
    navigation.navigate('GenerateMnemonic');
    MnemonicGenStore.setReplacementWordBool(false);
    MnemonicGenStore.selectDummyWord('');
  };

  const [replacementWordIsChosen, setReplacementWord] = useState(false);

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
    <View>
      <Center height='full' bgColor='#FFF5Da'>
        <BackButton onPress={backButtonPayload} />
        <Text>
          Hi Welcome to Insert Dummy Word: {MnemonicGenStore.selectedWord}
        </Text>

        <Text>Now choose the your dummy word</Text>
        <ButtonList array={MnemonicGenStore.replacementMnemonicFragment} />
        <ContainedButton
          text='Confirm Mnemonic'
          onPress={nextButtonPayload}
          disabled={!MnemonicGenStore.replacementWordIsSelected}
        />
      </Center>
    </View>
  );
};
