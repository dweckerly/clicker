import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppProvider from './AppProvider';

import HeroesScreen from './src/components/screens/HeroesScreen';
import QuestsScreen from './src/components/screens/QuestsScreen';
import Header from './src/components/Header';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <Header></Header>
      <NavigationContainer
        independent = {true}
      >
        <Tab.Navigator>
          <Tab.Screen name="Heroes" component={HeroesScreen} />
          <Tab.Screen name="Quests" component={QuestsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
