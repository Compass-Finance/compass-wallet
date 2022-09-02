import { Text, View, Center, Image, Box } from 'native-base';
import { images } from '../../../assets';
import { walletSetupActions } from '../../logic/actions';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { useEffect } from 'react';
import { getValueFor } from '../../logic/utils';

export const LandingView = ({ navigation }: ILandingNavProps) => {
  const getStartedPayload = () => {
    walletSetupActions.moveForwardToSecondUndecidedStage();
    navigation.navigate('WalletSetup');
  };
  return (
    <Box safeArea rounded='xl' bgColor='background.100'>
      <Center height='full' bgColor='#FFF5DA'>
        <Text
          fontSize='lg'
          padding='3'
          textAlign='center'
          fontWeight='bold'
          marginTop='15'
          marginBottom='10'
        >
          Time to take your Banking in the right Direction
        </Text>
        <Image
          // marginTop='1'
          source={images['beige_landing_icon'] as any}
          alt='Compass Finance Logo'
          size='2xl'
        />
        <Text fontSize='xl' fontWeight='semibold' marginBottom='1/4'>
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
