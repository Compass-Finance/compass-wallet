import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type WalletSetupViews = {
  LandingView: any;
  WalletSetup: any;
  RecoverWallet: any;
  ConfirmRecovery: any;
  GenerateMnemonic: any;
  BackupMnemonic: any;
  InsertDummyWord: any;
  ConfirmDummyWord: any;
  FinishRecovery: any;
  UploadToCloudProvider: any;
  FinishSetup: any;
};

interface TransactionViewRouteParams {
  selectedToken: string;
}

type TransactionViews = {
  AssetsView: TransactionViewRouteParams;
  SelectAmountView: TransactionViewRouteParams;
  SelectAddressView: TransactionViewRouteParams;
  ConfirmTransactionView: TransactionViewRouteParams;
};

type HomeViews = {
  HomeTabView: any;
};

export interface ILandingNavProps {
  navigation: NativeStackNavigationProp<WalletSetupViews, any>;
}

export interface IHomeNavProps {
  navigation: NativeStackNavigationProp<HomeViews, any>;
}

export interface IAssetsNavProps {
  navigation: NativeStackNavigationProp<
    TransactionViews,
    keyof TransactionViews
  >;
}
