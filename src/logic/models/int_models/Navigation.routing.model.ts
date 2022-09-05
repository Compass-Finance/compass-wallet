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

type TransactionViews = {
  HomeTabRouter: any;
  SelectAmountView: any;
  SelectAddressView: any;
  ConfirmTransactionView: any;
  TransactionSent: any;
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
  navigation: NativeStackNavigationProp<TransactionViews, any>;
}
