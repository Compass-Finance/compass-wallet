import { BackChevron } from '../../../assets/icons';
import { Button, Text, Box } from 'native-base';
import { Dimensions } from 'react-native';

interface TxnBackButtonProps {
  payload: () => void;
}

export const TxnBackButton = ({ payload }: TxnBackButtonProps) => {
  const { height } = Dimensions.get('window');
  return (
    <Button
      onPress={payload}
      backgroundColor='transparent'
      marginRight={height < 800 ? '4/5' : '4/6'}
    >
      <Box display='flex' flexDirection='row' alignItems='center'>
        <BackChevron />
        <Text color='white' fontSize={'xl'}>
          Back
        </Text>
      </Box>
    </Button>
  );
};
