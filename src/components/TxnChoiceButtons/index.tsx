import { Flex, Button, Text } from 'native-base';

interface TxnChoiceButtonProps {
  depositPayload: () => void;
  withdrawlsPayload: () => void;
  viewState: 'withdrawls' | 'deposits';
}

export const TxnChoiceButtons = ({
  depositPayload,
  withdrawlsPayload,
  viewState,
}: TxnChoiceButtonProps) => {
  const selectedBtnStyling = { backgroundColor: '#FF8989' };
  const nonSelectedBtnStyling = {
    backgroundColor: 'transparent',
    borderColor: '#FF8989',
    borderWidth: 2,
  };

  return (
    <Flex flexDirection={'row'}>
      <Button
        onPress={depositPayload}
        // @ts-ignore
        style={
          viewState === 'deposits' ? selectedBtnStyling : nonSelectedBtnStyling
        }
        width='50%'
        borderRadius='0'
      >
        <Text color={viewState === 'withdrawls' ? 'primary.100' : 'white'}>
          Deposits
        </Text>
      </Button>
      <Button
        onPress={withdrawlsPayload}
        // @ts-ignore
        style={
          viewState === 'withdrawls'
            ? selectedBtnStyling
            : nonSelectedBtnStyling
        }
        borderRadius='0'
        width='50%'
      >
        <Text color={viewState === 'deposits' ? 'primary.100' : 'white'}>
          Withdrawls
        </Text>
      </Button>
    </Flex>
  );
};
