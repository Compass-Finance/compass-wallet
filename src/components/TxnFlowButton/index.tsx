import { Button, Text } from 'native-base';

interface TxnFlowProps {
  payload: () => void;
  margin?: string;
  text?: string;
  fontSize?: string;
  width?: string;
}

export const TxnFlowButton = ({
  payload,
  margin = 'auto',
  text = 'Next',
  fontSize = '26.35',
  width = '115',
}: TxnFlowProps) => {
  return (
    <Button
      maxWidth={width}
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
