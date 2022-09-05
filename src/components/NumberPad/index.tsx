import { Box, Text } from 'native-base';
import { BackChevron } from '../../../assets/icons';

const NumPadText = ({ text }: any) => {
  return (
    <Text fontSize='25' color='white' fontWeight='semibold'>
      {text}
    </Text>
  );
};

export const NumberPad = () => {
  const numPadChars = [
    [<NumPadText text='1' />, <NumPadText text='2' />, <NumPadText text='3' />],
    [<NumPadText text='4' />, <NumPadText text='5' />, <NumPadText text='6' />],
    [<NumPadText text='7' />, <NumPadText text='8' />, <NumPadText text='9' />],
    [
      <NumPadText text='.' />,
      <Box marginLeft='5'>
        <NumPadText text='0' />
      </Box>,
      <Box paddingTop='1'>
        <BackChevron />
      </Box>,
    ],
  ];

  return (
    <Box width='full'>
      {numPadChars &&
        numPadChars.map((subArray, index) => {
          return (
            <Box
              key={index}
              style={{
                display: 'flex',
                // backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'space-between',
              }}
              justifyContent='space-between'
              marginY='6'
              marginX='50'
            >
              {subArray &&
                subArray.map((value, index) => {
                  return <Box key={index}>{value}</Box>;
                })}
            </Box>
          );
        })}
    </Box>
  );
};
