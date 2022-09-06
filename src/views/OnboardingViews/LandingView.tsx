import { Text, View, Center, Image, Box } from 'native-base';
import { images } from '../../../assets';
import { walletSetupActions } from '../../logic/actions';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { useEffect } from 'react';
import { getValueFor } from '../../logic/utils';
import { Dimensions } from 'react-native';

export const LandingView = ({ navigation }: ILandingNavProps) => {
  const { height } = Dimensions.get('window');
  const getStartedPayload = () => {
    walletSetupActions.moveForwardToSecondUndecidedStage();
    navigation.navigate('WalletSetup');
  };
  return (
    <Box safeArea rounded='xl' bgColor='background.100'>
      <Center height='full' bgColor='background.100'>
        <Text
          fontSize={height < 800 ? '2xl' : '3xl'}
          padding='3'
          textAlign='center'
          fontWeight='bold'
          marginTop={height < 800 ? '0' : '0'}
        >
          Time to take your Banking in the right Direction
        </Text>
        <Image
          // marginTop='1'
          source={images['beige_landing_icon'] as any}
          alt='Compass Finance Logo'
          size={height < 800 ? '350' : '400'}
        />
        <Text
          fontSize={height < 800 ? 'xl' : '2xl'}
          fontWeight='semibold'
          marginBottom={height < 800 ? '30' : '1/4'}
        >
          Welcome to Compass Finance
        </Text>
        <ContainedButton
          onPress={getStartedPayload}
          // marginTop='1/4'
          text='Get Started'
          marginBottom='1/4'
        />
      </Center>
    </Box>
  );
};
