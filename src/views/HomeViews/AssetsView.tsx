import { Center, View, Text } from 'native-base';
import { useEffect } from 'react';
import { Renbtc, Usdc, Weth, Dai } from '../../../assets/token_icons';
import { AssetChip } from '../../components/AssetChip';
import { AssetChipList } from '../../components/AssetChipList';
import { assetsActions } from '../../logic/actions';
import { AssetsStore } from '../../logic/stores';

export const AssetsView = () => {
  const svgHeight = '50px';
  const svgWidth = '50px';
  // const daiXML = tokenIcons.dai;
  useEffect(() => {
    assetsActions.setTokenDataArr();
  }, []);
  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <AssetChipList />
        {/* <Text>{AssetsStore.tokenDataArr[0].name}</Text> */}
        {/* <AssetChip
          price={1.01}
          name='dai'
          decimals={18}
          balance='0x0000000000000000000000000000000000000000000000000000000000000000'
          icon={Dai}
        /> */}
        {/* <Dai width={svgHeight} height={svgWidth} />
        <Weth width={svgHeight} height={svgWidth} />
        <Renbtc width={svgHeight} height={svgWidth} />
        <Usdc width={svgHeight} height={svgWidth} /> */}
      </Center>
    </View>
  );
};
