import axios from 'axios';
import { COIN_GECKO_API_QUERY_STRING } from '../constants';

export const CoinGeckoPriceGetter = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_GECKO_API_QUERY_STRING}&vs_currencies=usd`
    );
    // console.log(response.data, '<======= response');
    return response.data;
  } catch (e) {
    alert(e);
  }
};
