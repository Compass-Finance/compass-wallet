import { Button, Text } from 'native-base';
import { ButtonProps } from '../../logic/models/int_models';

export const OutlinedButton = ({
  onPress,
  text,
  marginTop,
  ButtonSize,
  fontSize,
}: ButtonProps) => {
  return (
    <Button
      marginTop={marginTop}
      onPress={() => onPress()}
      width={ButtonSize ? ButtonSize : '3/5'}
      borderRadius='20'
      borderStyle='solid'
      borderColor='primary.100'
      borderWidth='2'
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <Text
        fontSize={fontSize ? fontSize : 'lg'}
        color='primary.100'
        fontWeight='bold'
      >
        {text}
      </Text>
    </Button>
  );
};
