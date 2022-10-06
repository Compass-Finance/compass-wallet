import { LoadedWalletStore, AssetsStore } from '../stores';
import { UserTokenDataResEntry } from '../models/int_models';
import { UserTokenDataGetter } from '../services';
import { UserTokenDataCleaner } from '../middleware';

export const setTokenDataArr = async () => {
  try {
    console.log(`This is `);
    // 1. Call the User Token data getter
    const userTokenDataRes = await UserTokenDataGetter(
      LoadedWalletStore.wallet.address
    );
    // 2. Clean the Data w/ middleware
    const cleanedUserTokenData = UserTokenDataCleaner(
      userTokenDataRes as UserTokenDataResEntry[]
    );
    // 3. put it in the Assets Token Info
    AssetsStore.setTokenDataArr(cleanedUserTokenData);
  } catch (e) {
    alert(e);
  }
};

export const setSelectedTokenData = (
  tokenName: string,
  sendOrReceive: 'send' | 'receive'
) => {
  AssetsStore.setSelectedTokenData(tokenName, sendOrReceive);
};
