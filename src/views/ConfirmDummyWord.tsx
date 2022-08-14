import {
  Center,
  View,
  Text,
  TextArea,
  KeyboardAvoidingView,
} from 'native-base';
import { walletSetupActions } from '../logic/actions';
import { arrayEntry, ILandingNavProps } from '../logic/models/int_models';
import { MnemonicGenStore } from '../logic/stores';
import { BackButton } from '../components/BackButton';
import { Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { ButtonList } from '../components/ButtonList';
import { useState } from 'react';
import { ContainedButton } from '../components/ContainedButton';
import { getValueFor, save } from '../logic/utils';

export const ConfirmDummyWord = ({ navigation }: ILandingNavProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const backButtonPayload = () => {
    navigation.navigate('BackupMnemonic');
    walletSetupActions.moveBackwardToThirdWalletCreationStage();
  };

  const finishButtonPayload = async () => {
    navigation.navigate('FinishSetup');
    save('pk', MnemonicGenStore.prodMnemonic);
    // alert(`MNEMONIC SAVED =====> ${MnemonicGenStore.prodMnemonic} <=====`);
  };
  const [isValidMnemonic, setIsValidMnemonic] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Center height='full' bgColor='background.100'>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <BackButton onPress={backButtonPayload} />
          <Text fontWeight='bold' fontSize='2xl' textAlign='center'>
            Select Your Dummy Word & Verify Your Real Word
          </Text>
          <ButtonList array={MnemonicGenStore.presentationDummyMnemonic} />
          <TextArea
            marginLeft='50'
            marginRight='50'
            selectTextOnFocus={true}
            onChangeText={(text: string) => {
              const isValid = MnemonicGenStore.validateMnemonic(
                MnemonicGenStore.unvalidatedFakeWordInput,
                text
              );
              setIsValidMnemonic(isValid);
            }}
            autoCapitalize={'none'}
            autoCorrect={true}
            bgColor='#FFCC81'
            // maxWidth='4/6'
            maxHeight='35'
            totalLines={1}
            multiline={false}
            // marginBottom='2/4'
            marginBottom='1/6'
            marginTop='10'
            // PROD : 3/4
            placeholder='Put Your Real Word Here'
            autoCompleteType={undefined}
          />
        </KeyboardAvoidingView>
        {isValidMnemonic === true ? (
          <>
            <Text marginBottom='3'>Verified Mnemonic ✅</Text>
            <ContainedButton text='Next Step' onPress={finishButtonPayload} />
          </>
        ) : (
          <>
            <Text marginBottom='3'>Unverified Mnemonic ❌</Text>
            <ContainedButton
              text='Next Step'
              disabled={true}
              onPress={() => {}}
            />
          </>
        )}
      </Center>
    </TouchableWithoutFeedback>
  );
};

const finishTheJob = () => {
  // @ts-ignore
  // conversion logic to a regular string with spaces like this:
  // 'word1, word2, ... word12'
  save('mnemonic', mnemonicGen);
  // ^^ That's it right? =====> Yeah I think so
};
