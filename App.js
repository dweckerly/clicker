import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppProvider from './AppProvider';

import HeroRosterScreen from './src/components/screens/HeroRosterScreen';
import HeroHireScreen from './src/components/screens/HeroHireScreen';
import QuestsActiveScreen from './src/components/screens/QuestsActiveScreen';
import QuestsAvailableScreen from './src/components/screens/QuestsAvailableScreen';
import Header from './src/components/Header';
import { tabImage } from './src/shared/styles';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <Header></Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Guild" 
            component={HeroRosterScreen} 
            options={{
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/mounted-knight.png")} />
            }}
          />
          <Tab.Screen 
            name="Quests" 
            component={QuestsActiveScreen} 
            options={{
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/conqueror.png")} />
            }}
          />
          <Tab.Screen 
            name="Tavern" 
            component={HeroHireScreen} 
            options={{
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/tavern-sign.png")} />
            }}
          />          
          <Tab.Screen 
            name="Board" 
            component={QuestsAvailableScreen} 
            options={{
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/treasure-map.png")} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
