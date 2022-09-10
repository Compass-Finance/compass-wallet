import { Center, Spinner, Text } from 'native-base';
import { useEffect } from 'react';
import { MnemonicGenStore } from '../../logic/stores';
import { ILandingNavProps } from '../../logic/models/int_models';

export const DummyWordLoading = ({ navigation }: ILandingNavProps) => {
  useEffect(() => {
    MnemonicGenStore.generateFragment();
    navigation.navigate('InsertDummyWord');
  }, []);
  return (
    <Center
      safeArea
      alignItems='center'
      height='full'
      backgroundColor='background.100'
    >
      <Spinner color='primary.100' size='lg' padding={3} />
      <Text fontSize='md' textAlign='center' padding='5' fontWeight='semibold'>
        Generating Your Fake Words
      </Text>
    </Center>
  );
};
