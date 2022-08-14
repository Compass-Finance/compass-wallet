import { Button, Center, Flex, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { recoverWalletActions } from '../../logic/actions';
import { MnemonicGenStore, RecoverWalletStore } from '../../logic/stores';
import { arrayEntry } from '../../logic/models/int_models';
import { useRoute } from '@react-navigation/native';

export const ButtonList = ({ array }: any) => {
  // const array: arrayEntry[] = MnemonicGenStore.currentMnemonic;
  const route = useRoute();
  let [selectedButton, setSelectedButton] = useState('');

  return (
    <Center>
      <Flex
        flexDirection='row'
        w='100%'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        style={{
          padding: 25,
        }}
      >
        {array &&
          array.map((v: arrayEntry) => {
            return (
              <Button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 4,
                  margin: 10,
                  // marginRight: 5,
                }}
                size='lg'
                paddingRight='15'
                paddingLeft='15'
                borderRadius='3xl'
                backgroundColor='primary.100'
                borderStyle='solid'
                borderWidth={3}
                borderColor={
                  v.word === selectedButton ? '#80FF72' : 'primary.100'
                }
                key={v.id}
                onPress={() => {
                  if (route.name === 'GenerateMnemonic') {
                    setSelectedButton(v.word);
                    MnemonicGenStore.selectedWord = v.word;
                    MnemonicGenStore.selectedWordId = v.id;
                    MnemonicGenStore.setWordIsSelected(true);
                  } else if (route.name === 'InsertDummyWord') {
                    setSelectedButton(v.word);
                    MnemonicGenStore.selectDummyWord(v.word);
                    MnemonicGenStore.setReplacementWordBool(true);
                  } else if (route.name === 'ConfirmDummyWord') {
                    setSelectedButton(v.word);
                    MnemonicGenStore.unvalidatedFakeWordInput = v.word;
                  } else if (route.name === 'ConfirmRecovery') {
                    setSelectedButton(v.word);
                    recoverWalletActions.setDummyWord(v.word);
                  }
                }}
              >
                <Text fontWeight='semibold' fontSize='sm'>
                  {v.word}
                </Text>
              </Button>
            );
          })}
      </Flex>
    </Center>
  );
};
