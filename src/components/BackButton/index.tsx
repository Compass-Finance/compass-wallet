import { Button, Text } from 'native-base';
import { ButtonProps } from '../../logic/models/int_models';
import { Ionicons } from '@expo/vector-icons';

export const BackButton = ({
  onPress,
  marginBottom = '0',
  marginRight = '4/6',
}: ButtonProps) => {
  return (
    <Button
      onPress={() => onPress()}
      marginBottom={marginBottom}
      marginRight={marginRight}
      leftIcon={<Ionicons name='chevron-back' size={30} color='#FF8989' />}
      style={{ backgroundColor: 'transparent' }}
    >
      <Text fontSize='xl' color='primary.100'>
        Back
      </Text>
    </Button>
  );
};
