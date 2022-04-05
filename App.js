import { Image, StyleSheet } from 'react-native';
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
      <NavigationContainer
        independent={true}
      >
        <Header></Header>
        <Tab.Navigator
          sceneContainerStyle={{
            backgroundColor: "#2e2e2e"
          }}
        >
          <Tab.Screen 
            name="Guild" 
            component={HeroRosterScreen} 
            options={{
              headerShown: false,
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/medieval-barracks.png")} />,
              tabBarActiveBackgroundColor: "#2e2e2e",
              tabBarInactiveBackgroundColor: "#000",
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#fff"
            }}
          />
          <Tab.Screen 
            name="Quests" 
            component={QuestsActiveScreen} 
            options={{
              headerShown: false,
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/conqueror.png")} />,
              tabBarActiveBackgroundColor: "#2e2e2e",
              tabBarInactiveBackgroundColor: "#000",
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#fff"
            }}
          />
          <Tab.Screen 
            name="Tavern" 
            component={HeroHireScreen} 
            options={{
              headerShown: false,
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/tavern-sign.png")} />,
              tabBarActiveBackgroundColor: "#2e2e2e",
              tabBarInactiveBackgroundColor: "#000",
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#fff"
            }}
          />          
          <Tab.Screen 
            name="Board" 
            component={QuestsAvailableScreen} 
            options={{
              headerShown: false,
              tabBarIcon: () => <Image style={tabImage} source={require("./src/assets/icons/ui/treasure-map.png")} />,
              tabBarActiveBackgroundColor: "#2e2e2e",
              tabBarInactiveBackgroundColor: "#000",
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#fff"
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}