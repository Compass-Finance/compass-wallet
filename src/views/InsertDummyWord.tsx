import { arrayEntry, ILandingNavProps } from '../logic/models/int_models';
import { Text, View, Center } from 'native-base';
import { walletSetupActions } from '../logic/actions';
import { BackButton } from '../components/BackButton';
import { MnemonicGenStore } from '../logic/stores';
import { ButtonList } from '../components/ButtonList';
import { ContainedButton } from '../components/ContainedButton';
import { reaction } from 'mobx';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

export const InsertDummyWord = observer(({ navigation }: ILandingNavProps) => {
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
        <Text
          marginTop='1/5'
          marginBottom='1/5'
          fontSize='xl'
          fontWeight='bold'
        >
          Now Choose Your Dummy Word
        </Text>
        <ButtonList array={MnemonicGenStore.replacementMnemonicFragment} />
        <ContainedButton
          marginTop='3/5'
          text='Confirm Mnemonic'
          onPress={nextButtonPayload}
          disabled={!MnemonicGenStore.replacementWordIsSelected}
        />
      </Center>
    </View>
  );
});
