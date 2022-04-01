import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import HeroesScreen from './src/components/screens/HeroesScreen';
import QuestsScreen from './src/components/screens/QuestsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Heroes" component={HeroesScreen} />
        <Tab.Screen name="Quests" component={QuestsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
