import { Box, Text, Button, Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

// <Ionicons name="eye-off" size={24} color="black" />
// in order to make this composable, let's do the following
// height will be determined via props

interface mnemonicProps {
  height: string;
  onPress: () => void;
}

export const MnemonicCover = ({ height, onPress }: mnemonicProps) => {
  return (
    <Box
      borderWidth={4}
      borderRadius={10}
      borderColor='primary.100'
      height={height}
      bgColor='black'
      padding='4'
      opacity='90'
    >
      <Center>
        <Ionicons name='eye-off' size={38} color='white' />
        <Text marginTop={25} bold={true} color='white'>
          Tap to reveal your Secret Recovery Phrase
        </Text>
        <Text color='white'>Make sure no one is watching your screen.</Text>
        <Button
          marginTop={55}
          bgColor='transparent'
          borderWidth={2}
          borderColor='white'
          borderRadius={50}
          paddingLeft='55'
          paddingRight='55'
          onPress={onPress}
        >
          <Text bold={true} fontSize='lg' color='white'>
            View
          </Text>
        </Button>
      </Center>
    </Box>
  );
};
