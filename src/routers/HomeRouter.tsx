import { HomeView } from '../views/HomeViews/HomeView';
import { AssetsStackRouter } from './AssetsRouter';
import { TransactionView } from '../views/HomeViews/TransactionView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const HomeTabNav = createBottomTabNavigator();

export const HomeStackRouter = () => {
  return (
    <HomeTabNav.Navigator
      initialRouteName='HomeView'
      // screenOptions={{
      //   headerShown: false,
      // }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Assets') {
            iconName = focused ? 'cash' : 'cash-outline';
          }

          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff8989',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <HomeTabNav.Screen name='Home' component={HomeView} />
      <HomeTabNav.Screen name='Transactions' component={TransactionView} />
      <HomeTabNav.Screen name='Assets' component={AssetsStackRouter} />
    </HomeTabNav.Navigator>
  );
};
// So here's what you do,
