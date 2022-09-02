import { ScrollView } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import { assetsActions } from '../../logic/actions';
import { CombinedTokenDataEntry } from '../../logic/models/int_models';
import { AssetsStore } from '../../logic/stores';
import { AssetChip } from '../AssetChip';
import { observer } from 'mobx-react-lite';
import { RefreshControl } from 'react-native';

export const AssetChipList = observer(() => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    assetsActions.setTokenDataArr();
  }, []);

  useEffect(() => {
    assetsActions.setTokenDataArr();
  }, []);
  const array = AssetsStore.tokenDataArr;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {array &&
        array.map((v: CombinedTokenDataEntry) => {
          return (
            <AssetChip
              key={v.contractAddress}
              price={v.price}
              name={v.name}
              decimals={v.decimals}
              balance={v.balance}
              icon={v.icon}
              contractAddress={v.contractAddress}
            />
          );
        })}
    </ScrollView>
  );
});
