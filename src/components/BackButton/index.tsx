import { Button, Text } from 'native-base';
import { ButtonProps } from '../../logic/models/int_models';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const BackButton = ({
  onPress,
  marginTop = '0',
  marginBottom = '0',
  marginRight = '4/6',
}: ButtonProps) => {
  const { height } = Dimensions.get('window');

  return (
    <Button
      onPress={() => onPress()}
      // marginTop={height < 800 ? 0 : 0}
      // marginBottom={marginBottom}
      marginRight={height < 800 ? '290 ' : '330'}
      leftIcon={<Ionicons name='chevron-back' size={30} color='#FF8989' />}
      style={{ backgroundColor: 'transparent' }}
    >
      <Text fontSize='xl' color='primary.100'>
        Back
      </Text>
    </Button>
  );
};
