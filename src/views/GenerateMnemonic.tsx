import { Text, View, Center, Button, Spinner } from 'native-base';
import { ILandingNavProps } from '../logic/models/int_models';
import { walletSetupActions } from '../logic/actions';
import { BackButton } from '../components/BackButton';
import { ButtonList } from '../components/ButtonList';
import { MnemonicGenStore } from '../logic/stores';
import { ContainedButton } from '../components/ContainedButton';
import { useState, useEffect } from 'react';
import { reaction } from 'mobx';

export const GenerateMnemonic = ({ navigation }: ILandingNavProps) => {
  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToSecondUndecidedStage();
    navigation.navigate('WalletSetup');
    MnemonicGenStore.setWordIsSelected(false);
    MnemonicGenStore.selectWord('');
  };

  let [wordState, setWordState] = useState(false);
  // let [loading, setLoading] = useState(MnemonicGenStore.loading);

  const wordIsSelectedLogic = reaction(
    () => MnemonicGenStore.wordIsSelected,
    () => {
      if (MnemonicGenStore.wordIsSelected === true) {
        setWordState(true);
      } else {
        setWordState(false);
      }
    }
  );

  useEffect(() => wordIsSelectedLogic, [MnemonicGenStore.wordIsSelected]);

  const nextButtonPayload = () => {
    walletSetupActions.moveForwardToSecondWalletCreationStage();
    MnemonicGenStore.generateFragment();
    // ! IMPORTANT ^^ 6 SECONDS AS WELL
    navigation.navigate('InsertDummyWord');
  };

  return (
    <View>
      <Center height='full' bgColor='#FFF5DA'>
        <BackButton onPress={backButtonPayload} />
        <Text
          fontSize='2xl'
          fontWeight='semibold'
          marginTop='8'
          textAlign='center'
        >
          Select A Word From Your Mnemonic & write it down on Paper
        </Text>

        <ButtonList array={MnemonicGenStore.currentMnemonic} />
        <ContainedButton
          marginTop='19'
          text='Next Step'
          onPress={nextButtonPayload}
          disabled={!wordState}
        />
      </Center>
    </View>
  );
};
