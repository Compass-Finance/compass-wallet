import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AssetsView } from '../views/HomeViews/AssetsView';
import { TransactionView } from '../views/HomeViews/TransactionView';
import { HomeView } from '../views/HomeViews/HomeView';
import { Ionicons } from '@expo/vector-icons';
import { Locked } from '../views/MiscViews/Locked';

const HomeTabNav = createBottomTabNavigator();

export const HomeTabRouter = () => {
  return (
    <HomeTabNav.Navigator
      initialRouteName='Home'
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
      {/* <HomeTabNav.Screen name='Home' component={Locked} /> */}
      <HomeTabNav.Screen name='Transactions' component={TransactionView} />
      <HomeTabNav.Screen name='Assets' component={AssetsView} />
    </HomeTabNav.Navigator>
  );
};
