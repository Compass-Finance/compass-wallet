import { View, Center, Spinner, Text, Progress, Box } from 'native-base';
import { ILandingNavProps } from '../../logic/models/int_models';
export const CreateWalletLoading = ({ navigation }: ILandingNavProps) => {
  return (
    <View>
      {/* <Center bgColor='#FFF5DA' height='full'>
        <Spinner size='lg' color='#FF9898' />
        <Text fontSize='xl' padding='5'>
          Creating Your Wallet
        </Text>
        <Box w='90%' maxW='400'>
          <Progress
            bg='#FF8989'
            _filledTrack={{
              bg: '#80FF72',
            }}
            rounded='15'
            size='md'
            value={65}
            mx='4'
          />
        </Box>
      </Center> */}
    </View>
  );
};
