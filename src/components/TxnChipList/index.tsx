import { Center, Flex } from 'native-base';
import { TxnChip } from '../TxnChip';
import { CleanedAlchemyERC20TransferHistoryEntry } from '../../logic/models/int_models';

interface txnChipProps {
  txnArray: CleanedAlchemyERC20TransferHistoryEntry[];
  depositsOrWithdrawl: 'deposits' | 'withdrawls';
}
export const TxnChipList = ({
  txnArray,
  depositsOrWithdrawl,
}: txnChipProps) => {
  return (
    <>
      <Center
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Flex
          flexDir='row'
          w='100%'
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          style={{
            paddingLeft: 1,
            // padding: 25,
          }}
        >
          {txnArray &&
            txnArray.map((v: CleanedAlchemyERC20TransferHistoryEntry) => {
              return (
                <TxnChip
                  from={v.from}
                  to={v.to}
                  tokenName={v.tokenName}
                  realTokenAmount={v.realTokenAmount}
                  withdrawlOrDeposit={depositsOrWithdrawl}
                  key={v.hash}
                />
              );
            })}
        </Flex>
      </Center>
    </>
  );
};
