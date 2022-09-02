import { Center, Box } from 'native-base';
import { AssetChipList } from '../../components/AssetChipList';

export const AssetsView = () => {
  return (
    <Box safeAreaTop={true} backgroundColor='background.100'>
      <Center height='full' bgColor='background.100'>
        <AssetChipList />
      </Center>
    </Box>
  );
};
