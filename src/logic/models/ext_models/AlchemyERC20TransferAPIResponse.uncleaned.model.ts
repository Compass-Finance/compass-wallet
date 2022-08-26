interface rawContractEntry {
  address: string;
  decimal: string;
  value: string;
}

interface transferEntry {
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
    {
      asset: 'PEOPLE',
      blockNum: '0xd14898',
      category: 'erc20',
      erc1155Metadata: null,
      erc721TokenId: null,
      from: '0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1',
      hash: '0x2f5d93a9db65548eb43794aa43698acd653e6b2df35c6028b8599a234f2c6dc0',
      rawContract: {
        address: '0x7a58c0be72be218b41c608b7fe7c5bb630736c71',
        decimal: '0x12',
        value: '0x05d71059f7d980cbaa6e',
      },
      to: '0x83abecf7204d5afc1bea5df734f085f2535a9976',
      tokenId: null,
      uniqueId:
        '0x2f5d93a9db65548eb43794aa43698acd653e6b2df35c6028b8599a234f2c6dc0:log:181',
      value: 27579.060635486854,
    },
    {
      asset: 'GTC',
      blockNum: '0xdf53b7',
      category: 'erc20',
      erc1155Metadata: null,
      erc721TokenId: null,
      from: '0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1',
      hash: '0x9ef9ffde70f96dc76f229aec2fad0314d031aafbd2521a735d1aa250ba8471e7',
      rawContract: {
        address: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
        decimal: '0x12',
        value: '0x039adf75aafb7a0000',
      },
      to: '0xd017617f6f0fd22796e137a8240cc38f52a147b2',
      tokenId: null,
      uniqueId:
        '0x9ef9ffde70f96dc76f229aec2fad0314d031aafbd2521a735d1aa250ba8471e7:log:155',
      value: 66.5,
    },
    {
      asset: 'DAI',
      blockNum: '0xe92577',
      category: 'erc20',
      erc1155Metadata: null,
      erc721TokenId: null,
      from: '0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1',
      hash: '0xfbf54d515ddb2072d3353b69b3b6d4347d746a215d8dbd44b05b4fc5a0e18af9',
      rawContract: {
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimal: '0x12',
        value: '0x02ed6689e54f180000',
      },
      to: '0x60594a405d53811d3bc4766596efd80fd545a270',
      tokenId: null,
      uniqueId:
        '0xfbf54d515ddb2072d3353b69b3b6d4347d746a215d8dbd44b05b4fc5a0e18af9:log:220',
      value: 54,
    },
    {
      asset: 'ibETHv2',
      blockNum: '0xe9d7dd',
      category: 'erc20',
      erc1155Metadata: null,
      erc721TokenId: null,
      from: '0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1',
      hash: '0x8816d5d1519ea60ca89d7de853be5ee197549981ccce756ceaab1b4ef2e3ff2e',
      rawContract: {
        address: '0xeea3311250fe4c3268f8e684f7c87a82ff183ec1',
        decimal: '0x8',
        value: '0x0473c6f30f',
      },
      to: '0x0000000000000000000000000000000000000000',
      tokenId: null,
      uniqueId:
        '0x8816d5d1519ea60ca89d7de853be5ee197549981ccce756ceaab1b4ef2e3ff2e:log:356',
      value: 191.22287375,
    },
  ],
};
