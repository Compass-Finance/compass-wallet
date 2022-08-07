import { Center, View, Text, TextArea } from 'native-base';
import { walletSetupActions } from '../logic/actions';
import { arrayEntry, ILandingNavProps } from '../logic/models/int_models';
import { MnemonicGenStore } from '../logic/stores';
import { BackButton } from '../components/BackButton';
import { ButtonList } from '../components/ButtonList';
import { useState } from 'react';
import { ContainedButton } from '../components/ContainedButton';
import { getValueFor, save } from '../logic/utils';
import { Wallet } from 'ethers';
import { HDNode } from 'ethers/lib/utils';

export const ConfirmDummyWord = ({ navigation }: ILandingNavProps) => {
  const backButtonPayload = () => {
    navigation.navigate('BackupMnemonic');
    walletSetupActions.moveBackwardToThirdWalletCreationStage();
  };

  const finishButtonPayload = async () => {
    navigation.navigate('FinishSetup');
    save('pk', MnemonicGenStore.prodMnemonic);
    alert(`MNEMONIC SAVED =====> ${MnemonicGenStore.prodMnemonic} <=====`);
  };
  const [isValidMnemonic, setIsValidMnemonic] = useState(false);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <BackButton onPress={backButtonPayload} />
        <Text fontSize='3xl' textAlign='center'>
          Select your fake word & verify your real word
        </Text>
        <ButtonList array={MnemonicGenStore.presentationDummyMnemonic} />
        <TextArea
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
          maxWidth='4/6'
          maxHeight='35'
          totalLines={1}
          multiline={false}
          marginBottom='2/4'
          // PROD : 3/4
          placeholder='Put Your Real Word Here'
          autoCompleteType={undefined}
        />
        {isValidMnemonic === true ? (
          <>
            <Text>Verified Mnemonic ✅</Text>
            <ContainedButton text='Next Step' onPress={finishButtonPayload} />
          </>
        ) : (
          <>
            <Text>Unverified Mnemonic ❌</Text>
            <ContainedButton
              text='Next Step'
              disabled={true}
              onPress={() => {}}
            />
          </>
        )}
      </Center>
    </View>
  );
};

const finishTheJob = () => {
  // @ts-ignore
  // conversion logic to a regular string with spaces like this:
  // 'word1, word2, ... word12'
  save('mnemonic', mnemonicGen);
  // ^^ That's it right? =====> Yeah I think so
};
