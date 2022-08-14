import { Center, View, Text } from 'native-base';
import { useState, useEffect } from 'react';
import { providers, Wallet } from 'ethers';
// import { Wallet } from 'zksync';
import { getValueFor } from '../logic/utils';
import { AlchemyProvider } from '@ethersproject/providers';
export const HomeView = () => {
  // const provider = new providers.AlchemyProvider(
  //   'https://polygon-mumbai.g.alchemy.com/v2/Y9KqKr26e9qv2Jv54F0zQclK8CDFhn8Y'
  // );
  const [provider, setProvider]: any = useState(null);
  const [pk, setPk] = useState('');
  const [signer, setSigner]: any = useState('');
  useEffect(() => {
    // What happens here?
    // ! 1. Load in the PK
    const loadPk = async () => {
      setPk(await getValueFor('pk'));
      setProvider(
        new AlchemyProvider(
          'maticmum',
          'Y9KqKr26e9qv2Jv54F0zQclK8CDFhn8Y'
          // Y9KqKr26e9qv2Jv54F0zQclK8CDFhn8Y
        )
      );
      const wallet = new Wallet(pk, provider);
      alert(wallet.address);
      setSigner(new Wallet(pk, provider));
    };
    loadPk();
    // ! 2. Provide the Provider Link
    // ! 3. Sync the Wallet using a utils
    // ! 4. Then Connect it and store the wallet in the store
    // ? Is that it? well that's all that you really need to connect a wallet
  }, []);

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Home View </Text>
        {/* <Text>{provider}</Text> */}
        <Text>{signer.address}</Text>
        {/* <Button
          onPress={() => {
            deleteItemAsync('pk');
          }}
          >
          Delete The PK
        </Button> */}
      </Center>
    </View>
  );
};

// Ok so we can
// ~ -----------------------------------------------------------------------
// * Truthfully that's half of the battle
//    & What's the other half?
//    & The other half is sending transactions in erc20s & the native
//    & token, but you could majority take those from the RN-ETH-WALLET
//    & Key and leverage some of those pieces b/c it's mainly just
//    & smart contract calls on ERC20s & Native Token transfers
//    & that's pretty much it, that's all of the backend, the rest of
//    & the basic implementation, anything on top of that should be retro-
//    & fitted to what we hear and what we can attain to anchor onto to build
//    & our strength upon, I feel like this is a bad idea & this is exactly
//    & the feeling we want, we're terrible at predicting the future, I will
//    & work AS LONG AS IT TAKES to build something useful to these people.
// So one of the things we can do is make the erc20
