import { LoadedWalletStore } from '../stores';

export const dummyWithdrawls = [
  {
    from: LoadedWalletStore.wallet.address,
    hash: '0x190d65f71ad983f4bd7c4c9e425a89415e835c4b323e3ecf95e757afe1317740',
    realTokenAmount: '500.42',
    to: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'DAI',
  },
  {
    from: LoadedWalletStore.wallet.address,
    hash: '0x43c6944c3cdff0b4f9fac08552371d66466b165dc31074481e8b995c65e25b8b',
    realTokenAmount: '0.42',
    to: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'WETH',
  },
  {
    from: LoadedWalletStore.wallet.address,
    hash: '0x37846dd92fc73da6f07f46495279d1a8a1161a21e971949a26bee9d1eee2f62d',
    realTokenAmount: '0.005',
    to: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'RENBTC',
  },
  {
    from: LoadedWalletStore.wallet.address,
    hash: '0x6fc36189589dda2f6ff23d870b89fa5994cc291e7ff290a12347ba86b9395b17',
    realTokenAmount: '54.72',
    to: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'USDC',
  },
];
export const dummyDeposits = [
  {
    to: LoadedWalletStore.wallet.address,
    hash: '0x190d65f71ad983f4bd7c4c9e425a89415e835c4b323e3ecf95e757afe1317740',
    realTokenAmount: '500.42',
    from: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'DAI',
  },
  {
    to: LoadedWalletStore.wallet.address,
    hash: '0x43c6944c3cdff0b4f9fac08552371d66466b165dc31074481e8b995c65e25b8b',
    realTokenAmount: '0.42',
    from: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'WETH',
  },
  {
    to: LoadedWalletStore.wallet.address,
    hash: '0x37846dd92fc73da6f07f46495279d1a8a1161a21e971949a26bee9d1eee2f62d',
    realTokenAmount: '0.005',
    from: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'RENBTC',
  },
  {
    to: LoadedWalletStore.wallet.address,
    hash: '0x6fc36189589dda2f6ff23d870b89fa5994cc291e7ff290a12347ba86b9395b17',
    realTokenAmount: '54.72',
    from: '0xB8d382c1696e93f641008Da345991E967922D9C9',
    tokenName: 'USDC',
  },
];
