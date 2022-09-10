import { Box, Center, Flex, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { images } from '../../../assets';
import { ContainedButton } from '../../components/ContainedButton';

interface LockedProps {
  authPayload: () => void;
}

export const Locked = ({ authPayload }: LockedProps) => {
  const { height } = Dimensions.get('window');
  return (
    <Flex
      // justifyContent='center'
      // alignItems='center'
      height='full'
      width='full'
    >
      <Box
        height='full'
        width='full'
        bgColor='background.100'
        style={{
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Image
          // size='95%'
          alt='splash compass logo'
          style={{ flex: 1 }}
          source={images['splash']}
        />
        <Box
          width='100%'
          // backgroundColor={'secondary.100'}
          display='flex'
          alignItems='center'
          marginBottom={height < 800 ? 55 : 60}
        >
          <ContainedButton text='Authenticate' onPress={authPayload} />
        </Box>
      </Box>
    </Flex>
  );
};
