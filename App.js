import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppProvider from './AppProvider';

import HeroesScreen from './src/components/screens/HeroesScreen';
import QuestsScreen from './src/components/screens/QuestsScreen';
import Header from './src/components/Header';
import { tabImage } from './src/shared/styles';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <Header></Header>
      <NavigationContainer
        independent = {true}
      >
        <Tab.Navigator>
          <Tab.Screen 
            name="Heroes" 
            component={HeroesScreen} 
            options={{
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/mounted-knight.png")} />
            }}
          />
          <Tab.Screen name="Quests" component={QuestsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
