import { action, observable } from 'mobx';

export class LoadingStore {
  @observable loading: boolean = false;

  @action setLoading(bool: boolean) {
    this.loading = bool;
  }
}

export default new LoadingStore();
