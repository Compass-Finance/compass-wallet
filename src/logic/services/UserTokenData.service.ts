import { supabase } from '.';
import { UserTokenDataResArr } from '../models/int_models';

export const UserTokenDataGetter = async (addressToQuery: string) => {
  try {
    const tokenDataRes = await supabase.rpc('fetch_user_token_data', {
      address: addressToQuery,
    });
    // @ts-ignore
    return tokenDataRes.data.data as UserTokenDataResArr;
  } catch (e) {
    alert(e);
  }
};
