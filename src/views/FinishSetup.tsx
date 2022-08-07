import { Center, View, Text } from 'native-base';
import { BackButton } from '../components/BackButton';
import { ContainedButton } from '../components/ContainedButton';
import { OutlinedButton } from '../components/OutlinedButton';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useEffect, useState } from 'react';
import { WalletSetupStore } from '../logic/stores';
import { IHomeNavProps } from '../logic/models/int_models';

export const FinishSetup = ({ navigation }: IHomeNavProps) => {
  useEffect(() => {}, []);
  const doneButtonPayload = () => {
    WalletSetupStore.setFinished(true);
    navigation.navigate('HomeView');
  };
  const setDailyReminderPayload = () => {};

  const learnMorePayload = () => {};
  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <ConfettiCannon
          autoStart={true}
          count={200}
          origin={{ x: -10, y: 0 }}
          fadeOut={true}
        />
        <Text fontSize='6xl' textAlign='center'>
          🎉
        </Text>
        <Text>{WalletSetupStore.finished}</Text>
        <Text fontSize='3xl'>Congratulations</Text>
        <Text fontSize='lg' padding='3' textAlign='center'>
          You've successfully backed up & protected your wallet. Don’t forget
          your real word or lose your list. If so your funds will be permanently
          lost.
        </Text>
        <OutlinedButton
          marginTop='4'
          fontSize='xs'
          ButtonSize='1/2'
          onPress={() => {}}
          text='Set a Daily Reminder'
        />
        <Text marginTop='5' padding='3' textAlign='center' fontSize='xs'>
          Compass-Fi cannot recover your wallet if you lose your real recovery
          phrase. This also means Compass-Fi cannot control your wallet at all,
          the power is in your hands.
        </Text>
        <Text marginTop='5' marginBottom='1/6' color='primary.100'>
          Learn More
        </Text>
        <ContainedButton onPress={doneButtonPayload} text='Done' />
      </Center>
    </View>
  );
};
