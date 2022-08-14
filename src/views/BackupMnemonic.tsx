import {
  Center,
  View,
  Button,
  Text,
  Box,
  Modal,
  TextArea,
  Checkbox,
  KeyboardAvoidingView,
} from 'native-base';
import { Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { ILandingNavProps, arrayEntry } from '../logic/models/int_models';
import { BackButton } from '../components/BackButton';
import { MnemonicGenStore } from '../logic/stores';
import { useState } from 'react';
import { ContainedButton } from '../components/ContainedButton';
import { OutlinedButton } from '../components/OutlinedButton';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';

export const BackupMnemonic = ({ navigation }: ILandingNavProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const [snackBool, setSnackBool] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const forwardButtonPayload = () => {
    navigation.navigate('ConfirmDummyWord');
  };

  const copyButtonPayload = () => {
    MnemonicGenStore.generateFakeCompositeMnemonic();
    const presMnemonic = MnemonicGenStore.presentationDummyMnemonic;
    let mnemonicStr: string = '';
    const mnemonic: string[] = [];
    presMnemonic.map((value: arrayEntry) => {
      mnemonic.push(value.word);
    });
    for (let i = 0; i < mnemonic.length; i++) {
      mnemonicStr += `${mnemonic[i]} \n `;
    }
    Clipboard.setString(
      `DO NOT DELETE Compass-Fi Mnemonic \n \n \n \n DO NOT SHARE THIS NOTE WITH ANYBODY \n \n \n ${
        MnemonicGenStore.hint === ''
          ? ''
          : `Hint: ${MnemonicGenStore.hint} \n \n`
      } Dummy Mnemonic: \n ${mnemonicStr}`
    );
    setSnackBool(true);
    setTimeout(() => {
      setSnackBool(false);
    }, 2000);
  };

  const backwardButtonPayload = () => {
    navigation.navigate('InsertDummyWord');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Center height='full' bgColor='background.100'>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <BackButton onPress={backwardButtonPayload} />
          <Text fontSize='3xl' marginTop='7' textAlign='center'>
            Backup your Mnemonic
          </Text>
          <Text fontSize='lg' marginTop='5' marginBottom='3' textAlign='center'>
            Steps
          </Text>
          <Box
            borderColor='secondary.100'
            borderWidth='7'
            padding='2'
            margin='2'
          >
            <Text>1. Copy Your Phrase with the Button Below</Text>
            <Text>2. Create a locked Note in your phone & Paste it there.</Text>
            <Text>
              3. Think of a mental image that links your fake and real word
              together. The more absurd, the better.
            </Text>
            <Text>
              4. [Optional] Write down a hint for yourself to remind you of the
              mental image in Step 3.
            </Text>
          </Box>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            size='lg'
          >
            <Modal.Content bgColor='secondary.100'>
              <Modal.CloseButton
                onPress={() => {
                  setShowModal(false);
                }}
              />
              <Modal.Header
                bgColor='secondary.100'
                borderBottomColor='primary.100'
                borderBottomWidth='2'
              >
                An Example
              </Modal.Header>
              <Modal.Body padding='3'>
                <Text fontSize='md'>{`Fake Word: Deer \n \nReal Word: Defense`}</Text>
                <Text fontSize='md'>{`\n Mental Image: \n \n Imagine a Deer in the Pentagon giving a presentaiton on Defense Spending.`}</Text>
                <Text fontSize='md'>{`\n Pretty absurd & hard to forget, right? Think of something like that.`}</Text>
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Button
            marginLeft='255'
            marginRight='15'
            bgColor='primary.100'
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text fontSize='md' bold={true}>
              Example
            </Text>
          </Button>
          <TextArea
            selectTextOnFocus={true}
            onChangeText={(text: string) => {
              MnemonicGenStore.setHint(text);
            }}
            autoCorrect={true}
            bgColor='primary.100'
            color='black'
            placeholderTextColor='white'
            multiline={false}
            marginTop='15'
            paddingLeft='4'
            placeholder='Your Hint Goes Here'
            maxHeight='10'
            borderWidth='2'
            borderColor='black'
            maxWidth='90%'
            fontSize='sm'
            marginBottom='5'
            autoCompleteType={undefined}
          />
        </KeyboardAvoidingView>
        <OutlinedButton
          text='Copy Mnemonic & Hint'
          // marginBottom=''
          onPress={copyButtonPayload}
        />
        {/* @ts-ignore */}
        <Checkbox
          value={''}
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          colorScheme='green'
          marginLeft='5'
          marginRight='5'
          marginTop='3'
          marginBottom='3'
        >
          I Understand that if I don't remember my real word all funds will be
          lost
        </Checkbox>
        <ContainedButton
          disabled={!isChecked}
          text='Proceed to next step'
          onPress={forwardButtonPayload}
        />
        <Toast visible={snackBool}>Copied</Toast>
      </Center>
    </TouchableWithoutFeedback>
  );
};
