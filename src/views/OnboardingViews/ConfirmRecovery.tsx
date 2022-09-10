import { Text, Center, KeyboardAvoidingView, Input } from 'native-base';
import { Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ButtonList } from '../../components/ButtonList';
import { ContainedButton } from '../../components/ContainedButton';
import { ILandingNavProps } from '../../logic/models/int_models';
import { RecoverWalletStore } from '../../logic/stores';
import { utils } from 'ethers';
import { useState } from 'react';
import recoverWalletStore from '../../logic/stores/recoverWallet.store';

export const ConfirmRecovery = ({ navigation }: ILandingNavProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const backButtonPayload = () => {
    navigation.navigate('RecoverWallet');
  };

  const loginButtonPayload = () => {
    navigation.navigate('FinishRecoveryLoading');
    // wipe the store after this
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Center height='full' backgroundColor='background.100'>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <BackButton onPress={backButtonPayload} />
          <ButtonList array={RecoverWalletStore.presentationMnemonic} />
          <Input
            borderWidth={0}
            selectTextOnFocus={true}
            autoCapitalize='none'
            onChangeText={(text: string) => {
              RecoverWalletStore.setRealWord(text);
              RecoverWalletStore.generateProperMnemonic();
              utils.isValidMnemonic(
                recoverWalletStore.realCompositeMnemonic
              ) === true
                ? setButtonIsDisabled(true)
                : setButtonIsDisabled(false);
              // const isValid = '';
            }}
            bgColor='primary.300'
            placeholder='Your Dummy Word Goes Here...'
            placeholderTextColor='white'
            marginLeft='50'
            marginRight='50'
            maxHeight='35'
            totalLines={1}
            multiline={false}
            marginBottom='1/3'
          />
        </KeyboardAvoidingView>
        <Text marginBottom='3'>
          {buttonIsDisabled === true
            ? 'Verified Mnemonic ✅'
            : 'Unverified Mnemonic ❌'}
        </Text>
        <ContainedButton
          text='Finish'
          onPress={loginButtonPayload}
          disabled={!buttonIsDisabled}
        />
      </Center>
    </TouchableWithoutFeedback>
  );
};
