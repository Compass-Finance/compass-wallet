import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AssetsView } from '../views/HomeViews/AssetsView';
import { ConfirmTransaction } from '../views/TransactionViews/ConfirmTransaction';
import { SelectAddress } from '../views/TransactionViews/SelectAddress';
import { SelectAmount } from '../views/TransactionViews/SelectAmount';

const AssetsStack = createNativeStackNavigator();
export const AssetsStackRouter = () => {
  return (
    <AssetsStack.Navigator
      initialRouteName='AssetsView'
      screenOptions={{
        headerShown: false,
      }}
    >
      <AssetsStack.Screen name='AssetsView' component={AssetsView} />
      <AssetsStack.Screen name='SelectAmountView' component={SelectAmount} />
      <AssetsStack.Screen name='SelectAddressView' component={SelectAddress} />
      <AssetsStack.Screen
        name='ConfirmTransactionView'
        component={ConfirmTransaction}
      />
    </AssetsStack.Navigator>
  );
};
