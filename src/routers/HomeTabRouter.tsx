import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AssetsView } from '../views/HomeViews/AssetsView';
import { HomeView } from '../views/HomeViews/HomeView';
import { TransactionView } from '../views/HomeViews/TransactionView';
import { Ionicons } from '@expo/vector-icons';

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
      {/* <HomeTabNav.Screen name='Home' component={HomeView} /> */}
      <HomeTabNav.Screen name='Transactions' component={TransactionView} />
      <HomeTabNav.Screen name='Assets' component={AssetsView} />
    </HomeTabNav.Navigator>
  );
};
/* 
* Alright man what has to be done here?
  * 1. We're going to have to figure out how to read the fields of a binary JSON object array.
  * 2. Implement the price services in 



*/
