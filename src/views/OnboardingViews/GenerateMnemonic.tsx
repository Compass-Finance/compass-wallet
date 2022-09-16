import { Text, Box, Flex } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
import { BackButton } from '../../components/BackButton';
import { ButtonList } from '../../components/ButtonList';
import { MnemonicCover } from '../../components/MnemonicCover';
import { MnemonicGenStore } from '../../logic/stores';
import { ContainedButton } from '../../components/ContainedButton';
import { useState, useEffect } from 'react';
import { reaction } from 'mobx';
import { Dimensions } from 'react-native';

export const GenerateMnemonic = ({ navigation }: ILandingNavProps) => {
  const { height } = Dimensions.get('window');
  const backButtonPayload = () => {
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
    navigation.navigate('DummyWordLoading');
  };

  return (
    <Box safeArea bgColor='background.100'>
      <Flex height='full' bgColor='background.100' alignItems='center'>
        <BackButton onPress={backButtonPayload} />
        <Text
          fontSize={'2xl'}
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
            paddingTop='15'
            fontSize={height < 800 ? 'xs' : 'sm'}
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
            YMargin={height < 800 ? '10' : '55'}
            height='2/5'
            onPress={() => {
              setMnemonicIsVisible(true);
            }}
          />
        )}
        <ContainedButton
          marginTop={height < 800 ? '10' : '100'}
          text='Next Step'
          onPress={nextButtonPayload}
          disabled={!wordState}
        />
      </Flex>
    </Box>
  );
};
