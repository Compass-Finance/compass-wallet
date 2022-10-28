import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type WalletSetupViews = {
  LandingView: any;
  WalletSetup: any;
  RecoverWallet: any;
  FinishRecoveryLoading: any;
  ConfirmRecovery: any;
  FinishSetupLoading: any;
  GenerateMnemonic: any;
  BackupMnemonic: any;
  InsertDummyWord: any;
  ConfirmDummyWord: any;
  FinishRecovery: any;
  UploadToCloudProvider: any;
  WalletCreationLoading: any;
  DummyWordLoading: any;
  FinishSetup: any;
};

type TransactionViews = {
  HomeTabRouter: any;
  ReceiveTokens: any;
  SelectAmountView: any;
  SelectAddressView: any;
  ConfirmTransactionView: any;
  TransactionSent: any;
};

type HomeViews = {
  HomeTabView: any;
};

type HomeViewViews = {
  HomeView: any;
  HomeTools: any;
};

export interface IHomeViewProps {
  navigation: NativeStackNavigationProp<HomeViewViews, any>;
}

export interface ILandingNavProps {
  navigation: NativeStackNavigationProp<WalletSetupViews, any>;
}

export interface IHomeNavProps {
  navigation: NativeStackNavigationProp<HomeViews, any>;
}

export interface IAssetsNavProps {
  navigation: NativeStackNavigationProp<TransactionViews, any>;
}
