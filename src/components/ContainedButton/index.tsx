import { Button, Text } from 'native-base';
import { ButtonProps } from '../../logic/models/int_models';
import { LoadingStore } from '../../logic/stores';

export const ContainedButton = ({
  onPress,
  marginTop,
  text,
  disabled,
}: ButtonProps) => {
  return (
    <Button
      marginTop={marginTop}
      width='3/5'
      borderRadius='20'
      fontSize='2xl'
      bgColor='primary.100'
      onPress={() => {
        LoadingStore.setLoading(true);
        onPress();
        LoadingStore.setLoading(false);
      }}
      style={disabled === true ? { opacity: 0.5 } : {}}
    >
      <Text color='white' fontSize='lg' fontWeight='bold'>
        {text}
      </Text>
    </Button>
  );
};
