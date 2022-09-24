import { useCallback, useEffect, useState } from 'react';
import { assetsActions } from '../../logic/actions';
import { AssetsStore } from '../../logic/stores';
import { AssetChip } from '../AssetChip';
import { SwipeListView } from 'react-native-swipe-list-view';
import { observer } from 'mobx-react-lite';
import { RefreshControl } from 'react-native';
import { wait } from '../../logic/utils';
import { AssetSwipeOptions } from '../AssetsSwipeOptions';

export const AssetChipList = observer(() => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    assetsActions.setTokenDataArr();
  }, []);
  const array = AssetsStore.tokenDataArr;

  const AssetChips = (data: any) => {
    return (
      <AssetChip
        key={data.item.contractAddress}
        price={data.item.price}
        name={data.item.name}
        decimals={data.item.decimals}
        HRNativeBalance={data.item.HRNativeBalance}
        HRUSDBalance={data.item.HRUSDBalance}
        svg={data.item.svg}
        contractAddress={data.item.contractAddress}
        hexNativeBalance={''}
      />
    );
  };
  return (
    <>
      <SwipeListView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        stopLeftSwipe={110}
        stopRightSwipe={-110}
        data={array}
        renderItem={AssetChips}
        renderHiddenItem={AssetSwipeOptions}
        leftOpenValue={95}
        rightOpenValue={-95}
        previewRowIndex={-40}
        previewOpenDelay={3000}
      />
    </>
  );
});
