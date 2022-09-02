import {
  Center,
  Button,
  Text,
  Box,
  Modal,
  Checkbox,
  KeyboardAvoidingView,
} from 'native-base';
import { Platform } from 'react-native';
import { ILandingNavProps, arrayEntry } from '../../logic/models/int_models';
import { BackButton } from '../../components/BackButton';
import { MnemonicGenStore } from '../../logic/stores';
import { useState } from 'react';
import { ContainedButton } from '../../components/ContainedButton';
import { OutlinedButton } from '../../components/OutlinedButton';
import { setString } from 'expo-clipboard';
import { wait } from '../../logic/utils';
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
    setString(
      `COMPASS-FI DO NOT DELETE \n \n  Mnemonic: \n \n \n \n DO NOT SHARE THIS NOTE WITH ANYBODY \n \n \n ${
        MnemonicGenStore.hint === ''
          ? ''
          : `Hint: ${MnemonicGenStore.hint} \n \n`
      } Dummy Mnemonic: \n ${mnemonicStr}`
    );
    setSnackBool(true);
    wait(2000).then(() => setSnackBool(false));
  };
  const backwardButtonPayload = () => {
    navigation.navigate('InsertDummyWord');
  };

  return (
    <Box safeArea backgroundColor='background.100'>
      <Center height='full' bgColor='background.100'>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <BackButton marginTop='25' onPress={backwardButtonPayload} />
          <Text fontSize='3xl' marginTop='7' textAlign='center'>
            Backup your Mnemonic
          </Text>
          {/* <Text
            fontSize='xl'
            bold={true}
            marginTop='5'
            marginBottom='3'
            textAlign='center'
          >
            Steps
          </Text> */}
          <Box
            marginTop={5}
            marginBottom={5}
            borderColor='secondary.100'
            borderWidth='7'
            padding='4'
          >
            <Text>1. Copy your phrase with the button below</Text>
            <Text>2. Go to your notes app and paste it a new note.</Text>
            <Text>3. Lock the note.</Text>
            <Text>
              4. Think of a ridiculous sentence with your fake and real word.
            </Text>
            <Text fontSize='sm' textAlign={'center'}>
              NOTE: If it's not ridiculous you won't remember it.
            </Text>
          </Box>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            size='lg'
          >
            <Modal.Content bgColor='background.100'>
              <Modal.CloseButton
                onPress={() => {
                  setShowModal(false);
                }}
              />
              <Modal.Header
                bgColor='background.100'
                borderBottomColor='primary.100'
                borderBottomWidth='2'
              >
                An Example
              </Modal.Header>
              <Modal.Body padding='3'>
                <Text fontSize='md'>{`Fake Word: Deer \n \nReal Word: Defense`}</Text>
                <Text fontSize='md'>{`\n Sentence: \n \n The Deer talked about defense spending in the Pentagon.`}</Text>
                {/* <Text fontSize='md'>{`\n Pretty hard to forget, right? Think of something like that.`}</Text> */}
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Button
            maxWidth='2/4'
            marginLeft='185'
            marginRight='5'
            bgColor='primary.100'
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text fontSize='sm' bold={true}>
              Example Sentence
            </Text>
          </Button>
        </KeyboardAvoidingView>
        {/* <OutlinedButton
          marginTop='25'
          text='Copy Mnemonic'
          // marginBottom=''
          onPress={copyButtonPayload}
        /> */}

        <Checkbox
          value={''}
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          colorScheme='green'
          marginLeft='5'
          marginRight='10'
          marginTop='35'
          // marginBottom='35'
        >
          <Text bold={true} fontSize='md'>
            I have backed up my dummy mnemonic to the cloud and I understand
            that if I don't remember my real word, all funds will be lost.
          </Text>
        </Checkbox>
        <Toast
          backgroundColor='black'
          // opacity={10}
          // textColor='green'
          position={630}
          visible={snackBool}
        >
          Mnemonic Copied!
        </Toast>
        <ContainedButton
          marginTop='1/5'
          // marginBottom='55'
          // disabled={!isChecked}
          text={isChecked ? 'Next Step' : 'Copy Mnemonic'}
          onPress={isChecked ? forwardButtonPayload : copyButtonPayload}
        />
        <Box marginBottom='15' />
      </Center>
    </Box>
  );
};

// bruh I need to do something about th
