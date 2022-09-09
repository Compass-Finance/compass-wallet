import { LoadingStore } from '../stores';

export const setLoading = (bool: true) => {
  LoadingStore.setLoading(bool);
};
