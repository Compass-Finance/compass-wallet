// import { AssetsStackRouter } from './AssetsRouter';
// ^^ You'll Just want to bring the components in easy
import { HomeTabRouter } from './HomeTabRouter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmTransaction } from '../views/TransactionViews/ConfirmTransaction';
import { SelectAddress } from '../views/TransactionViews/SelectAddress';
import { SelectAmount } from '../views/TransactionViews/SelectAmount';

const HomeStack = createNativeStackNavigator();

export const HomeStackRouter = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='SelectAmountView'
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='HomeTabRouter' component={HomeTabRouter} />
      <HomeStack.Screen name='SelectAmountView' component={SelectAmount} />
      <HomeStack.Screen name='SelectAddressView' component={SelectAddress} />
      <HomeStack.Screen
        name='ConfirmTransactionView'
        component={ConfirmTransaction}
      />
    </HomeStack.Navigator>
  );
};
