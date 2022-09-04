import { Box, Pressable, Text } from 'native-base';
import { ReceiveTokens, SendTokens } from '../../../assets/icons';

interface SendOrReceiveProps {
  height: number;
  receivePayload: () => void;
  sendPayload: () => void;
}

export const SendOrReceive = ({
  height,
  receivePayload,
  sendPayload,
}: SendOrReceiveProps) => {
  return (
    <Box
      //   display={'flex'}
      borderTopRadius={25}
      borderWidth={5}
      borderColor='#FFCECE'
      width='100%'
      //   margin={'auto'}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingLeft: 25,
        paddingRight: 35,
      }}
      height={height < 800 ? '85' : '85'}
      // padding='5'
    >
      <Pressable onPress={receivePayload}>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ReceiveTokens />
          <Text fontSize='xl' fontWeight='semibold' color='primary.200'>
            Receive
          </Text>
        </Box>
      </Pressable>
      <Pressable onPress={sendPayload}>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SendTokens />
          <Text fontSize='lg' fontWeight={'semibold'} color='primary.200'>
            Send
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};
