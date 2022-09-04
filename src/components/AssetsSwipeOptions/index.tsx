import { CombinedTokenDataEntry } from '../../logic/models/int_models';
import { Box, Pressable, Text } from 'native-base';
import { ReceiveTokens, SendTokens } from '../../../assets/icons';
import { assetsActions } from '../../logic/actions';

interface assetSwipeProps {
  item: CombinedTokenDataEntry;
}
// ok so if you want the navigation to work
// you'll have to pass it down all the way from the
// top so start in the assets view then pass

export const AssetSwipeOptions = (data: assetSwipeProps, rowMap: any) => {
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
      console.log('row is closed', rowKey);
    }
  };
  return (
    <Box
      marginLeft='15'
      borderRadius={10}
      minHeight='131'
      marginTop='15'
      marginRight='15'
      marginBottom='3'
      minWidth='90%'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <Box
        borderLeftRadius={10}
        width='50%'
        height='100%'
        backgroundColor='#60FE5D'
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Pressable
          onPress={() => {
            assetsActions.setSelectedTokenData(data.item.name, 'receive');
            closeRow(rowMap, data.item.key);
            // console.log(`${data.item.name} <======= Token Name from receive`);
          }}
        >
          <Box paddingLeft='3' paddingTop='8'>
            <Box marginLeft='4'>
              <ReceiveTokens />
            </Box>
            <Text color='white' fontWeight='semibold' fontSize='md'>
              RECEIVE
            </Text>
          </Box>
        </Pressable>
      </Box>
      <Box
        borderRightRadius={10}
        width='50%'
        height='100%'
        backgroundColor='#76C5FF'
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Pressable
          onPress={() => {
            assetsActions.setSelectedTokenData(data.item.name, 'send');
            closeRow(rowMap, data.item.key);
            // console.log(`${data.item.name} <======= Token Name from SEND`);
          }}
        >
          <Box paddingRight='3' paddingTop='10'>
            <Box marginLeft='1.5'>
              <SendTokens />
            </Box>
            <Text
              color='white'
              fontWeight='bold'
              fontSize='lg'
              textAlign='center'
            >
              SEND
            </Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};
