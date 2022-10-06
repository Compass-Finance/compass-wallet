import { UserTokenDataResEntry } from '../../logic/models/int_models';
import { Box, Pressable, Text } from 'native-base';
import { ReceiveTokens, SendTokens } from '../../../assets/icons';
import { assetsActions } from '../../logic/actions';
import { AssetsStore } from '../../logic/stores';

interface assetSwipeProps {
  item: UserTokenDataResEntry;
}
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
            console.log(
              AssetsStore.selectedTokenData.selectedTokenName,
              '<====== console test'
            );
            closeRow(rowMap, data.item.key);
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
