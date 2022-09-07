import { HomeTabRouter } from './HomeTabRouter';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmTransaction } from '../views/TransactionViews/ConfirmTransaction';
import { SelectAddress } from '../views/TransactionViews/SelectAddress';
import { SelectAmount } from '../views/TransactionViews/SelectAmount';
import { TransactionSent } from '../views/TransactionViews/TransactionSent';
import { ReceiveTokens } from '../views/TransactionViews/ReceiveTokens';

const HomeStack = createNativeStackNavigator();

export const HomeStackRouter = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='HomeTabRouter'
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <HomeStack.Screen name='HomeTabRouter' component={HomeTabRouter} />
      <HomeStack.Screen name='ReceiveTokens' component={ReceiveTokens} />
      <HomeStack.Screen name='SelectAmountView' component={SelectAmount} />
      <HomeStack.Screen name='SelectAddressView' component={SelectAddress} />
      <HomeStack.Screen
        name='ConfirmTransactionView'
        component={ConfirmTransaction}
      />
      <HomeStack.Screen name='TransactionSent' component={TransactionSent} />
    </HomeStack.Navigator>
  );
};
