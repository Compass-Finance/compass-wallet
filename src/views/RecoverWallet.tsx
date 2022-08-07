import { Center, Text, TextArea, View } from 'native-base';

export const RecoverWallet = () => {
  return (
    <View>
      <Center height='full' backgroundColor='background.100'>
        {/* 
          So stage 1 will probably have to be enter your dummy 
          phrase into a textArea, and then it should be cleaned, let's figure out a string
          cleaning algorithm that
      */}
        <TextArea
          selectTextOnFocus={true}
          onChangeText={(text: string) => {
            // Set the dedicated store value here
            // you probably want to make your own
            // mobx data store for this section
            // ok so let's now make our own store
          }}
          autoCorrect={true}
          bgColor='primary.100'
          color='black'
          multiline={false}
          marginTop='15'
          paddingLeft='4'
          placeholderTextColor='white'
          placeholder='Paste Your Recovery Phrase Here'
          maxHeight='10'
          borderWidth='2'
          borderColor='black'
          maxWidth='90%'
          fontSize='sm'
          marginBottom='3/6'
          autoCompleteType={undefined}
        />
      </Center>
    </View>
  );
};
