import axios from 'axios';

export const CoinGeckoPriceGetter = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=weth%2Crenbtc%2Cdai&vs_currencies=usd'
    );
    console.log(response.data, '<======= response');
    return response.data;
  } catch (e) {
    alert(e);
  }
};
// alright works well now what?

// well move on to middle ware
