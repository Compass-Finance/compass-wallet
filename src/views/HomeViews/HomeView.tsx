import { Center, View, Text, Button } from 'native-base';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Wallet, utils, Contract, BigNumber } from 'ethers';
import { ERC20Abi, ERC20Types } from '../../../assets/abis';
import { deleteItemAsync, getItemAsync } from 'expo-secure-store';
import { loadedWalletActions } from '../../logic/actions';
import { setString } from 'expo-clipboard';
import { LoadedWalletStore } from '../../logic/stores';

// Cool that's how you update balances
export const HomeView = () => {
  const [pk, setPk] = useState('');
  const [balance, setBalance] = useState('');
  const [tokenBalance, setTokenBalance] = useState('');
  const [address, setAddress] = useState('');
  const [signer, setSigner]: [Wallet, Dispatch<SetStateAction<Wallet>>] =
    useState({} as Wallet);
  useEffect(() => {
    const loadWallet = async () => {
      await loadedWalletActions.loadWallet('mumbai');
      // alert(LoadedWalletStore.rpcUrlOrApiKey);
      setAddress(LoadedWalletStore.wallet.address);
      setBalance((await LoadedWalletStore.wallet.getBalance()).toString());
    };

    loadWallet();
  }, []);

  // ✅✅✅✅ WORKS!! ✅✅✅✅
  const sendMaticPayload = async () => {
    try {
      const tx = await LoadedWalletStore.wallet.sendTransaction({
        from: await LoadedWalletStore.wallet.getAddress(),
        to: '0x54A39aB7D48DA59fC5E75be96d58f394e4BB9528',
        value: utils.parseEther('0.01'),
      });
      tx.wait(1);

      console.log(`TXN HASH =======> ${tx.hash}`);
      setBalance((await LoadedWalletStore.wallet.getBalance()).toString());
      // alert(`Transaction went through ${tx.chainId}`);
    } catch (e) {
      alert(e);
    }
  };
  // ✅✅✅✅ WORKS!! ✅✅✅✅

  // THIS WORKS AS WELL !!!! We got the blueprint LETS FUCKING GO <======== Got the token sending and the other shit down
  // Now it's about the UX let's figure out the UX pieces & then we come back to making this look & feel better
  const sendTokenPayload = async () => {
    try {
      // work ...
      const address = '0x5eDD10CC8981942E1307c4466449834B79A5406A';
      const abi = ERC20Abi;
      // @ts-ignore
      const tokenContract: ERC20Types = new Contract(address, abi, signer);
      tokenContract.transfer(
        '0xf8bA2c146A8F1D9B9e7A4cf4261F8cdC49d0e21e',
        utils.parseEther('16').toString()
      );
      // @ts-ignore
      const updatedtokenBalance: BigNumber = await tokenContract.balanceOf(
        signer.address
      );
      setTokenBalance(updatedtokenBalance.toString());
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View>
      <Center height='full' bgColor='background.100'>
        <Text>Home View </Text>
        <Text>{process.env.ALCHEMY_API_KEY}</Text>
        <Text>{address}</Text>
        <Text>MATIC BALANCE : {balance}</Text>
        <Text>TOKEN BALANCE: {tokenBalance}</Text>
        {/* <Text>{signer.getrBalance}</Text> */}

        <Button
          onPress={() => {
            setString(LoadedWalletStore.wallet.address);
            console.log(LoadedWalletStore.wallet.address);
          }}
        >
          Get Address
        </Button>
        <Button onPress={sendMaticPayload}>Send a Transaction</Button>
        <Button marginTop='5' onPress={sendTokenPayload}>
          Send Some tokens
        </Button>
      </Center>
    </View>
  );
};
/* 
* soon to be deaded
// const loadPk = async () => {
  try {
    setPk(await getValueFor('pk'));
    const mnemonic = HDNode.fromMnemonic(pk);
    const mnemonic = HDNode.fromMnemonic(
      'analyst hidden track input suggest result patient naive solid neither marriage million'
    );
    const wallet = new Wallet(mnemonic.privateKey, localProvider);

    ^^ PROD CODE
    const wallet = new Wallet(
      '86f64d0a4206fc71c806a1814a02497ff14dd64f5886d38c9e424445e74001d0',
      localProvider
    );
    setSigner(wallet);
    setBalance((await wallet.getBalance()).toString());
    console.log(await wallet.getAddress());
    const contractAddress = '0x5eDD10CC8981942E1307c4466449834B79A5406A';
    const abi = ERC20Abi;
    // @ts-ignore
    const TokenContract: ERC20Types = new Contract(
      contractAddress,
      abi,
      signer
    );
    // @ts-ignore
    const TokenBalance: BigNumber = await TokenContract.balanceOf(
      wallet.address
    );
    setTokenBalance(TokenBalance.toString());
  } catch (e) {
    alert(e);
    console.log(e);
  }
};
loadPk();
*/
