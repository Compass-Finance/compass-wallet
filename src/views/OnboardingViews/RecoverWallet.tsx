import {
  Center,
  KeyboardAvoidingView,
  Text,
  TextArea,
  View,
} from 'native-base';
import { recoverWalletActions, walletSetupActions } from '../../logic/actions';
import { RecoverWalletStore } from '../../logic/stores';
import { useState } from 'react';
import { ContainedButton } from '../../components/ContainedButton';
import { BackButton } from '../../components/BackButton';
import { ILandingNavProps } from '../../logic/models/int_models';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
export const RecoverWallet = ({ navigation }: ILandingNavProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
  const [numberOfNewLines, setNumberOfNewLines] = useState(0);

  const backButtonPayload = () => {
    RecoverWalletStore.setInputMnemonic('');
    walletSetupActions.moveBackwardToSecondUndecidedStage();
    navigation.navigate('WalletSetup');
  };
  const nextButtonPayload = () => {
    // What should go in here?
    // ^^ So the store is populated with a sanitized list right
    navigation.navigate('ConfirmRecovery');
    RecoverWalletStore.generatePresentationDummyMnemonic();
    // ^ Confirm the Mnemonic page so make the comp, add it to nav & add it to the model
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View> */}
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Center height='full' backgroundColor='background.100'>
          <BackButton onPress={backButtonPayload} />
          <Text
            fontSize='3xl'
            padding='3'
            textAlign='center'
            fontWeight='bold'
            marginTop='15'
            marginBottom='10'
          >
            Recover Your Wallet
          </Text>
          {/* <Text>{RecoverWalletStore.inputMnemonic}</Text> */}
          <TextArea
            selectTextOnFocus={true}
            onChangeText={(text: string) => {
              recoverWalletActions.setInputMnemonic(text);
              let substring = '\n';
              let count = text.split(substring).length - 1;
              setNumberOfNewLines(count);
            }}
            autoCapitalize='none'
            autoCorrect={true}
            bgColor='primary.100'
            color='white'
            placeholder='Paste Your Dummy  Recovery Phrase Here'
            placeholderTextColor='white'
            minHeight='300'
            maxWidth='1/2'
            fontSize='md'
            autoCompleteType={undefined}
          />
          <ContainedButton
            disabled={numberOfNewLines < 11 ? true : false}
            onPress={nextButtonPayload}
            text='Next Step'
            marginTop='15'
          />
        </Center>
      </KeyboardAvoidingView>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
};

/* 
What type of validation logic should we have here

  * So we'll want to make sure there's twelve words so how do we do that?

  ~ We can instantiate an `onTextChange` function
*/
