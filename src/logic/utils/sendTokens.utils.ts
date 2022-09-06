import { Contract, Transaction, Wallet, BigNumber } from 'ethers';
import { ERC20Abi } from '../../../assets/abis';

export const sendTokens = async (
  contractAddress: string,
  amountToTransfer: string,
  recipient: string,
  signer: Wallet
) => {
  let maxFeePerGas = BigNumber.from(40000000000); // fallback to 40 gwei
  let maxPriorityFeePerGas = BigNumber.from(40000000000); // fallback to 40 gwei

  console.log(
    `contract addy: ${contractAddress} amt: ${amountToTransfer} recipient: ${recipient} address: ${signer.address}`
  );
  const contract = new Contract(contractAddress, ERC20Abi, signer);

  const txn: Transaction = await contract.transfer(
    recipient,
    amountToTransfer,
    { maxPriorityFeePerGas, maxFeePerGas }
  );

  console.log(txn, 'END OF THE METHOD');
  console.log('end of method');
};
