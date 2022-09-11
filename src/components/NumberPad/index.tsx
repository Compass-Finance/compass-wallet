import { Box, Pressable, Text } from 'native-base';
import { BackChevron } from '../../../assets/icons';
import { Animated } from 'react-native';
import { useState } from 'react';
import { wait } from '../../logic/utils';
import { setHRTransferAmount } from '../../logic/actions/newTxn.actions';

interface numPadProps {
  text: string;
  key: string;
}

const NumPadText = ({ text, key }: numPadProps) => {
  return (
    <Text
      key={key}
      // style={{ display: 'flex' }}
      fontSize='25'
      lineHeight={30}
      // paddingTop='2'
      color='white'
      fontWeight='semibold'
    >
      {`${text === '<' ? '' : text} `}
    </Text>
  );
};

// so the numberpad will basically update a mobxs store value

export const NumberPad = () => {
  const numPadChars = [
    [
      <NumPadText text='1' key='1' />,
      <NumPadText text='2' key='2' />,
      <NumPadText text='3' key='3' />,
    ],
    [
      <NumPadText key='4' text='4' />,
      <NumPadText key='5' text='5' />,
      <NumPadText text='6' key='6' />,
    ],
    [
      <NumPadText key='7' text='7' />,
      <NumPadText key='8' text='8' />,
      <NumPadText key='9' text='9' />,
    ],
    [
      <NumPadText text=' . ' key='.' />,
      <Box key='0'>
        <NumPadText key='0' text='0' />
      </Box>,
      <Box width='4' height='4' marginRight='3' key='<'>
        <BackChevron />
      </Box>,
    ],
  ];

  const animatedValue = useState(new Animated.Value(0))[0];

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: ['#FF8989', '#FFAAAA'],
  });
  const animatedStyle = {
    backgroundColor: interpolateColor,
  };

  // const [isPressed, setIsPressed] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <Box width='full'>
      {numPadChars &&
        numPadChars.map((subArray, index) => {
          return (
            <Box
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              justifyContent='space-between'
              marginY='2'
              marginX='50'
            >
              {subArray &&
                subArray.map((value, index) => {
                  return (
                    <Animated.View
                      style={[
                        value.key === selectedValue ? animatedStyle : {},
                        { borderRadius: 100 },
                      ]}
                      key={index}
                    >
                      <Pressable
                        onPress={() => {
                          setSelectedValue(value.key as string);
                          setHRTransferAmount(value.key as string);
                          console.log(`${value.key} was just pressed`);
                          Animated.timing(animatedValue, {
                            toValue: 150,
                            duration: 100,
                            useNativeDriver: false,
                          }).start();
                          wait(250).then(() => {
                            Animated.timing(animatedValue, {
                              toValue: 0,
                              duration: 100,
                              useNativeDriver: false,
                            }).start();
                          });
                        }}
                        paddingX='26'
                        paddingTop='15'
                        paddingBottom='5'
                        borderRadius={100}
                        key={value.key}
                      >
                        {value}
                      </Pressable>
                    </Animated.View>
                  );
                })}
            </Box>
          );
        })}
    </Box>
  );
};
