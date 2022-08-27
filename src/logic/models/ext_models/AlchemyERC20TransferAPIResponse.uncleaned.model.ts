interface rawContractEntry {
  address: string;
  decimal: string;
  value: string;
}

export interface transferEntry {
  asset: string;
  blockNum: string;
  category: string;
  erc1155Metadata: string | null;
  erc721TokenId: string | null;
  from: string;
  hash: string;
  rawContract: rawContractEntry;
  to: string;
  tokenId: null | string;
  uniqueId: string;
  value: number;
}

export interface erc20HistoryResponse {
  transfers: transferEntry[];
}

const incomingData: erc20HistoryResponse = {
  transfers: [
    {
      asset: 'ENS',
      blockNum: '0xcf5dea',
      category: 'erc20',
      erc1155Metadata: null,
      erc721TokenId: null,
      from: '0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1',
      hash: '0x701f837467ae3112d787ddedf8051c4996ea82914f7a7735cb3db2d805799286',
      rawContract: {
        address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
        decimal: '0x12',
        value: '0x0849e897777a44a000',
      },
      to: '0x92560c178ce069cc014138ed3c2f5221ba71f58a',
      tokenId: null,
      uniqueId:
        '0x701f837467ae3112d787ddedf8051c4996ea82914f7a7735cb3db2d805799286:log:618',
      value: 152.89962568845024,
    },
  ],
};
