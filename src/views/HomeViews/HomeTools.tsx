import { Box, Center, Flex, ScrollView, Text } from 'native-base';
import { BackButton } from '../../components/BackButton';
import { IHomeViewProps } from '../../logic/models/int_models';

export const HomeTools = ({ navigation }: IHomeViewProps) => {
  const toolsText = ['Tool1', 'Tool2', 'Tool3', 'Tool4', 'Tool5'];

  return (
    <Box height='full' bgColor='background.100' safeAreaTop width='full'>
      <BackButton
        onPress={() => {
          navigation.navigate('HomeView');
        }}
      />
      <Flex
        alignItems={'center'}
        height='full'
        width='full'
        bgColor='background.100'
      >
        <ScrollView width='full'>
          {toolsText.map((value) => {
            return (
              <Box
                marginX='auto'
                width={'80'}
                display='flex'
                alignItems='center'
                borderRadius={'8'}
                textAlign='center'
                marginY='5'
                borderWidth={2}
                borderColor='gray.300'
              >
                <Text fontSize='xl'>{value}</Text>
              </Box>
            );
          })}
        </ScrollView>
      </Flex>
    </Box>
  );
};
