import { Text, View, Center, Button, Spinner, Box } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
import { walletSetupActions } from '../../logic/actions';
import { BackButton } from '../../components/BackButton';
import { ButtonList } from '../../components/ButtonList';
import { MnemonicCover } from '../../components/MnemonicCover';
import { MnemonicGenStore } from '../../logic/stores';
import { ContainedButton } from '../../components/ContainedButton';
import { useState, useEffect } from 'react';
import { reaction } from 'mobx';

export const GenerateMnemonic = ({ navigation }: ILandingNavProps) => {
  const backButtonPayload = () => {
    walletSetupActions.moveBackwardToSecondUndecidedStage();
    navigation.navigate('WalletSetup');
    MnemonicGenStore.setWordIsSelected(false);
    MnemonicGenStore.selectWord('');
  };

  const [wordState, setWordState] = useState(false);
  const [mnemonicIsVisible, setMnemonicIsVisible] = useState(false);
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
    <Box safeArea bgColor='background.100'>
      <Center height='full' bgColor='#FFF5DA'>
        <BackButton onPress={backButtonPayload} />
        <Text
          fontSize='2xl'
          fontWeight='semibold'
          marginTop='8'
          // marginBottom='1/6'
          textAlign='center'
        >
          Select A Word From Your Mnemonic & Memorize It
        </Text>
        {mnemonicIsVisible && (
          <Text
            textAlign='center'
            paddingTop='25'
            paddingLeft='25'
            paddingRight='25'
            bold={true}
          >
            This is your Secret Recovery Phrase. You will be asked to replace
            the word you select in this step with another word in the next step.
          </Text>
        )}
        {mnemonicIsVisible && (
          <ButtonList array={MnemonicGenStore.currentMnemonic} />
        )}
        {!mnemonicIsVisible && (
          <MnemonicCover
            height='2/5'
            onPress={() => {
              setMnemonicIsVisible(true);
            }}
          />
        )}
        <ContainedButton
          marginTop='1/6'
          text='Next Step'
          onPress={nextButtonPayload}
          disabled={!wordState}
        />
      </Center>
    </Box>
  );
};