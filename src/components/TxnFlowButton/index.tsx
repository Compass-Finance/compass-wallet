import { Button, Text } from 'native-base';
import { observer } from 'mobx-react-lite';

interface TxnFlowProps {
  payload: () => void;
  disabled?: boolean;
  margin?: string;
  text?: string;
  fontSize?: string;
  width?: string;
}

export const TxnFlowButton = ({
  disabled = true,
  payload,
  margin = 'auto',
  text = 'Next',
  fontSize = '26.35',
  width = '115',
}: TxnFlowProps) => {
  return (
    <Button
      disabled={disabled}
      maxWidth={width}
      opacity={disabled === true ? 50 : 100}
      backgroundColor='primary.300'
      borderRadius={20}
      onPress={payload}
      marginX={margin}
    >
      <Text
        fontWeight={'semibold'}
        fontSize={fontSize}
        paddingX='4'
        lineHeight={'30'}
        color='white'
      >
        {text}
      </Text>
    </Button>
  );
};
