import { Flex, Text, KeyboardAvoidingView, Input } from 'native-base';
// import { walletSetupActions } from '../../logic/actions';
import { ILandingNavProps } from '../../logic/models/int_models';
import { Dimensions } from 'react-native';
import { MnemonicGenStore } from '../../logic/stores';
import { BackButton } from '../../components/BackButton';
import { Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { ButtonList } from '../../components/ButtonList';
import { useState } from 'react';
import { ContainedButton } from '../../components/ContainedButton';
import { save } from '../../logic/utils';

export const ConfirmDummyWord = ({ navigation }: ILandingNavProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;
  const { height } = Dimensions.get('window');
  const backButtonPayload = () => {
    navigation.navigate('BackupMnemonic');
    // walletSetupActions.moveBackwardToThirdWalletCreationStage();
  };

  const finishButtonPayload = async () => {
    navigation.navigate('FinishSetupLoading');
  };
  const [isValidMnemonic, setIsValidMnemonic] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Flex
        height='full'
        bgColor='background.100'
        safeAreaTop
        alignItems='center'
      >
        {/* <Flex> */}
        <KeyboardAvoidingView
          width='100%'
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
          marginBottom={height < 800 ? '30' : '50'}
        >
          <BackButton onPress={backButtonPayload} />
          <Text
            fontWeight='semibold'
            fontSize='2xl'
            textAlign='center'
            marginTop={height < 800 ? '0' : '10'}
            marginBottom={height < 800 ? '0' : '55'}
          >
            Select Your Dummy Word & Verify Your Real Word
          </Text>
          <ButtonList array={MnemonicGenStore.presentationDummyMnemonic} />
          <Input
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
            bgColor='primary.300'
            borderWidth={0}
            placeholderTextColor='white'
            // marginBottom
            maxHeight='35'
            totalLines={1}
            marginTop='10'
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
              text='Finish Setup'
              disabled={true}
              onPress={() => {}}
            />
          </>
        )}
      </Flex>
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
