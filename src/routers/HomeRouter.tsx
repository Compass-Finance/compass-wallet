import { NavigationContainer } from '@react-navigation/native';
import { HomeView } from '../views/HomeView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeTabNav = createBottomTabNavigator();

export const HomeStackRouter = () => {
  return (
    <HomeTabNav.Navigator
      initialRouteName='StarterView'
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeTabNav.Screen name='StarterView' component={HomeView} />
    </HomeTabNav.Navigator>
  );
};
