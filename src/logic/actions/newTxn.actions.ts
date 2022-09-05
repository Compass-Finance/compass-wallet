import { SelectedTokenData } from '../models/int_models';
import { NewTransactionStore } from '../stores';

export const setSelectedTokenData = (tokenDataObj: SelectedTokenData) => {
  NewTransactionStore.setSelectedTokenData(tokenDataObj);
};
