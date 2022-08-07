import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type WalletSetupViews = {
  LandingView: any;
  WalletSetup: any;
  RecoverWallet: any;
  GenerateMnemonic: any;
  BackupMnemonic: any;
  InsertDummyWord: any;
  ConfirmDummyWord: any;
  UploadToCloudProvider: any;
  FinishSetup: any;
};

type HomeViews = {
  HomeView: any;
};

export interface ILandingNavProps {
  navigation: NativeStackNavigationProp<WalletSetupViews, any>;
}

export interface IHomeNavProps {
  navigation: NativeStackNavigationProp<HomeViews, any>;
}
