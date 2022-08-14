import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingView } from '../views/LandingView';
import { WalletSetup } from '../views/WalletSetup';
import { GenerateMnemonic } from '../views/GenerateMnemonic';
import { InsertDummyWord } from '../views/InsertDummyWord';
import { BackupMnemonic } from '../views/BackupMnemonic';
import { ConfirmDummyWord } from '../views/ConfirmDummyWord';
import { FinishSetup } from '../views/FinishSetup';
import { HomeStackRouter } from '../routers/HomeRouter';
import { RecoverWallet } from '../views/RecoverWallet';
import { ConfirmRecovery } from '../views/ConfirmRecovery';
import { FinishRecovery } from '../views/FinishRecovery';

interface StackNavigatorProps {
  route: 'HomeView' | 'LandingView' | 'RecoverWallet';
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
      <MasterStack.Screen name='HomeView' component={HomeStackRouter} />
    </MasterStack.Navigator>
  );
};
