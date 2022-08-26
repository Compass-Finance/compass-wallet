import { Center, Text, View } from 'native-base';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect } from 'react';

export const TransactionView = () => {
  // logic logic logic
  const config = {
    apiKey: 'c-HGDkGIWhy3YZhl3saacg4qDdr76TKa',
    network: Network.ETH_MAINNET,
  };
  useEffect(() => {
    const something = async () => {
      const alchemy = new Alchemy(config);
      // await alchemy.core.get;
      const data = await alchemy.core.getAssetTransfers({
        fromBlock: '0x0',
        fromAddress: '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1',
        // @ts-ignore
        category: ['erc20'],
      });
      console.log(data);
    };
    something();
    // console.log(data);
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Transaction View</Text>
      </Center>
    </View>
  );
};
