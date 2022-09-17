import { Text, View, Center, Image, Box } from 'native-base';
import { images } from '../../../assets';
// import { walletSetupActions } from '../../logic/actions';
import { ILandingNavProps } from '../../logic/models/int_models';
import { ContainedButton } from '../../components/ContainedButton';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';

export const LandingView = ({ navigation }: ILandingNavProps) => {
  const { height } = Dimensions.get('window');
  const getStartedPayload = () => {
    navigation.navigate('WalletSetup');
  };
  return (
    <Box safeArea rounded='xl' bgColor='background.100'>
      <Center height='full' bgColor='background.100'>
        <Text
          fontSize={'2xl'}
          padding='3'
          textAlign='center'
          fontWeight='bold'
          marginTop={'0'}
        >
          Time To Take Your Banking In The Right Direction
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
