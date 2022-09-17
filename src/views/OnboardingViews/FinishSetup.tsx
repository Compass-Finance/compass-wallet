import { View, Text, Flex } from 'native-base';
import { ContainedButton } from '../../components/ContainedButton';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { IHomeNavProps } from '../../logic/models/int_models';

export const FinishSetup = ({ navigation }: IHomeNavProps) => {
  const [expoToken, setExpoToken] = useState({ expoPushToken: '' });
  const doneButtonPayload = () => {
    navigation.navigate('HomeTabView');
  };

  const { height } = Dimensions.get('window');
  return (
    <View>
      <Flex
        height='full'
        bgColor='background.100'
        alignItems='center'
        safeAreaTop
      >
        <ConfettiCannon
          autoStart={true}
          count={200}
          origin={{ x: -10, y: 0 }}
          fadeOut={true}
        />
        <Text fontSize='6xl' textAlign='center' marginY='10'>
          🎉
        </Text>
        <Text fontSize='3xl' marginBottom={height < 800 ? '2' : '15'}>
          Congratulations
        </Text>
        <Text
          fontSize={height < 800 ? 'lg' : 'xl'}
          padding='3'
          textAlign='center'
        >
          You've successfully backed up & protected your wallet. Don’t forget
          your real word or lose your list. If so your funds will be permanently
          lost.
        </Text>
        {/* <OutlinedButton
          marginTop='4'
          fontSize='xs'
          ButtonSize='1/2'
          onPress={() => {}}
          text='Set a Daily Reminder'
        /> */}
        <Text marginTop='5' padding='3' textAlign='center' fontSize='xs'>
          Compass-Fi cannot recover your wallet if you lose your real recovery
          phrase. This also means Compass-Fi cannot control your wallet at all,
          the power is in your hands.
        </Text>
        <Text
          marginTop='5'
          marginBottom={height < 800 ? '1/6' : '200'}
          color='primary.100'
        >
          Learn More
        </Text>
        <ContainedButton onPress={doneButtonPayload} text='Done' />
      </Flex>
    </View>
  );
};
