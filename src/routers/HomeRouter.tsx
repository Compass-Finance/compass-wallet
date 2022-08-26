import { NavigationContainer } from '@react-navigation/native';
import { HomeView } from '../views/HomeView';
import { TransactionView } from '../views/TransactionView';
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeView') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'TransactionView') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff8989',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <HomeTabNav.Screen name='HomeView' component={HomeView} />
      <HomeTabNav.Screen name='TransactionView' component={TransactionView} />
    </HomeTabNav.Navigator>
  );
};
