import { ScrollView } from 'native-base';
import { CombinedTokenDataEntry } from '../../logic/models/int_models';
import { AssetsStore } from '../../logic/stores';
import { AssetChip } from '../AssetChip';
import { observer } from 'mobx-react-lite';

// the input here will be data in the store into the components w/ an array.map
export const AssetChipList = observer(() => {
  const array = AssetsStore.tokenDataArr;
  return (
    <ScrollView>
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
