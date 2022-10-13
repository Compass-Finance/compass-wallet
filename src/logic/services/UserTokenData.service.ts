import { supabase } from '.';
import { UserTokenDataResArr } from '../models/int_models';

export const UserTokenDataGetter = async (addressToQuery: string) => {
  try {
    console.log(addressToQuery, '<======= is this null ????');
    const tokenDataRes = await supabase.rpc('fetch_user_token_data', {
      address: addressToQuery,
      the_network: 'polygon',
    });
    // console.log(
    //   `THIS IS THE DATA !!! =======> ${JSON.stringify(tokenDataRes.data)}`
    // );
    // @ts-ignore
    return tokenDataRes.data.data as UserTokenDataResArr;
  } catch (e) {
    alert(e);
  }
};
