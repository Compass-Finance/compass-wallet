import { Center, View, Text, Button } from 'native-base';
import { deleteItemAsync } from 'expo-secure-store';

export const HomeView = () => {
  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Home View </Text>
        <Button
          onPress={() => {
            deleteItemAsync('pk');
          }}
        >
          Delete The PK
        </Button>
      </Center>
    </View>
  );
};
