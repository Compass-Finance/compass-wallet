import { Center, Box, Text } from 'native-base';
import { AssetChipList } from '../../components/AssetChipList';
import { IAssetsNavProps } from '../../logic/models/int_models';
import { useEffect } from 'react';
import { reaction } from 'mobx';

export const AssetsView = ({ navigation }: IAssetsNavProps) => {
  // What happens now?
  // Well now you'll want to set up a reaction where the bulk of the logic will
  // be and then you'll wa

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
