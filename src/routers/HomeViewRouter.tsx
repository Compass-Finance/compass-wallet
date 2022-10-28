import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from '../views/HomeViews/HomeView';
import { HomeTools } from '../views/HomeViews/HomeTools';

const HomeViewStack = createNativeStackNavigator();

export const HomeViewRouter = () => {
  return (
    <HomeViewStack.Navigator
      initialRouteName='HomeView'
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeViewStack.Screen name='HomeView' component={HomeView} />
      <HomeViewStack.Screen name='HomeTools' component={HomeTools} />
    </HomeViewStack.Navigator>
  );
};
