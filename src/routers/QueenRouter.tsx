import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingView } from '../views/OnboardingViews/LandingView';
import { WalletSetup } from '../views/OnboardingViews/WalletSetup';
import { GenerateMnemonic } from '../views/OnboardingViews/GenerateMnemonic';
import { InsertDummyWord } from '../views/OnboardingViews/InsertDummyWord';
import { BackupMnemonic } from '../views/OnboardingViews/BackupMnemonic';
import { ConfirmDummyWord } from '../views/OnboardingViews/ConfirmDummyWord';
import { FinishSetup } from '../views/OnboardingViews/FinishSetup';
import { HomeStackRouter } from '../routers/HomeRouter';
import { RecoverWallet } from '../views/OnboardingViews/RecoverWallet';
import { ConfirmRecovery } from '../views/OnboardingViews/ConfirmRecovery';
import { FinishRecovery } from '../views/OnboardingViews/FinishRecovery';
import { WalletCreationLoading } from '../views/OnboardingViews/WalletCreationLoading';
import { DummyWordLoading } from '../views/OnboardingViews/DummyWordLoading';
import { FinishSetupLoading } from '../views/OnboardingViews/FinishSetupLoading';
import { FinishRecoveryLoading } from '../views/OnboardingViews/FinishRecoveryLoading';

interface StackNavigatorProps {
  route: 'HomeTabView' | 'LandingView' | 'RecoverWallet';
}

const MasterStack = createNativeStackNavigator();
export const QueenRouter = ({ route }: StackNavigatorProps) => {
  return (
    <MasterStack.Navigator
      initialRouteName={route}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MasterStack.Screen
        name='FinishSetupLoading'
        component={FinishSetupLoading}
      />
      <MasterStack.Screen
        name='FinishRecoveryLoading'
        component={FinishRecoveryLoading}
      />
      <MasterStack.Screen
        name='WalletCreationLoading'
        component={WalletCreationLoading}
      />
      <MasterStack.Screen
        name='DummyWordLoading'
        component={DummyWordLoading}
      />
      <MasterStack.Screen name='LandingView' component={LandingView} />
      <MasterStack.Screen name='WalletSetup' component={WalletSetup} />
      <MasterStack.Screen
        name='GenerateMnemonic'
        component={GenerateMnemonic}
      />
      <MasterStack.Screen name='RecoverWallet' component={RecoverWallet} />
      <MasterStack.Screen name='ConfirmRecovery' component={ConfirmRecovery} />

      <MasterStack.Screen name='InsertDummyWord' component={InsertDummyWord} />
      <MasterStack.Screen name='BackupMnemonic' component={BackupMnemonic} />
      <MasterStack.Screen
        name='ConfirmDummyWord'
        component={ConfirmDummyWord}
      />
      <MasterStack.Screen name='FinishRecovery' component={FinishRecovery} />
      <MasterStack.Screen name='FinishSetup' component={FinishSetup} />
      <MasterStack.Screen name='HomeTabView' component={HomeStackRouter} />
    </MasterStack.Navigator>
  );
};
