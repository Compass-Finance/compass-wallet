import {
  Button,
  Text,
  Box,
  Modal,
  Checkbox,
  useToast,
  Flex,
} from 'native-base';
import { ILandingNavProps, arrayEntry } from '../../logic/models/int_models';
import { BackButton } from '../../components/BackButton';
import { MnemonicGenStore } from '../../logic/stores';
import { useState } from 'react';
import { ContainedButton } from '../../components/ContainedButton';
import { setString } from 'expo-clipboard';
import { wait } from '../../logic/utils';
import { Dimensions } from 'react-native';

export const BackupMnemonic = ({ navigation }: ILandingNavProps) => {
  const { height } = Dimensions.get('window');
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const toast = useToast();

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
    toast.show({
      title: 'Mnemonic Copied ✅',
      placement: 'bottom',
    });
    wait(1350).then(() => toast.closeAll());
  };
  const backwardButtonPayload = () => {
    navigation.navigate('InsertDummyWord');
  };

  return (
    <Box safeArea backgroundColor='background.100'>
      <Flex height='full' bgColor='background.100' alignItems='center'>
        <BackButton marginTop='25' onPress={backwardButtonPayload} />
        <Text
          fontSize='3xl'
          fontWeight='medium'
          marginTop='7'
          textAlign='center'
        >
          Backup your Mnemonic
        </Text>
        <Box
          marginTop={height < 800 ? 5 : 79}
          marginBottom={5}
          borderColor='secondary.100'
          borderWidth='7'
          marginX='1'
          padding={height < 800 ? '3' : '5'}
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
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
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
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Button
          maxWidth='2/4'
          marginLeft={height < 800 ? '205' : '220'}
          // marginRight='5'
          bgColor='primary.100'
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text fontSize='sm' bold={true}>
            Example Sentence
          </Text>
        </Button>
        <Checkbox
          value={''}
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          colorScheme='green'
          marginLeft='5'
          marginRight='10'
          marginTop={height < 800 ? '75' : '135'}
          // marginBottom='35'
        >
          <Text
            paddingY={height < 800 ? 0 : '5'}
            paddingX={height < 800 ? 0 : 2}
            fontWeight={'semibold'}
            fontSize={height < 800 ? 'sm' : 'sm'}
            textAlign='center'
          >
            I have backed up my dummy mnemonic to the cloud and I understand
            that if I don't remember my real word, all funds will be lost.
          </Text>
        </Checkbox>
        <ContainedButton
          marginTop={height < 800 ? '55' : ' 17'}
          // marginBottom='55'
          // disabled={!isChecked}
          text={isChecked ? 'Confirm Mnemonic' : 'Copy Mnemonic'}
          onPress={isChecked ? forwardButtonPayload : copyButtonPayload}
        />
        <Box marginBottom='15' />
      </Flex>
    </Box>
  );
};

// bruh I need to do something about th
