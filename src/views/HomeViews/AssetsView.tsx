import { Center, Box, Text } from 'native-base';
import { AssetChipList } from '../../components/AssetChipList';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { useEffect } from 'react';
import { reaction } from 'mobx';
import { AssetsStore } from '../../logic/stores';
import { newTxnActions } from '../../logic/actions';

export const AssetsView = ({ navigation }: IAssetsNavProps) => {
  // where should

  const navigationReaction = reaction(
    () => AssetsStore.selectedTokenData,
    () => {
      if (AssetsStore.selectedTokenData.sendOrReceive === 'receive') {
        navigation.navigate('ReceiveTokens');
      } else {
        newTxnActions.populateSelectedTokenObj();
        navigation.navigate('SelectAmountView');
      }
    }
  );

  useEffect(() => navigationReaction, [AssetsStore.selectedTokenData]);

  return (
    <Box safeAreaTop={true} backgroundColor='background.100'>
      <Text
        fontWeight='bold'
        marginLeft='7'
        marginTop='15'
        fontSize='3xl'
        bold={true}
      >
        Assets
      </Text>
      <Center height='full' bgColor='background.100'>
        <AssetChipList />
      </Center>
    </Box>
  );
};
