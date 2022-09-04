import { Button, Text } from 'native-base';

interface TxnFlowProps {
  payload: () => void;
}

export const TxnFlowButton = ({ payload }: TxnFlowProps) => {
  return (
    <Button backgroundColor='primary.300' borderRadius={20} onPress={payload}>
      <Text
        fontWeight={'semibold'}
        fontSize='26.36'
        paddingX='4'
        lineHeight={'30'}
        color='white'
      >
        Next
      </Text>
    </Button>
  );
};
