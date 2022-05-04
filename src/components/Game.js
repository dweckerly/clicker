import { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppContext } from '../../AppProvider';

import HeroRosterScreen from './screens/HeroRosterScreen';
import HeroHireScreen from './screens/HeroHireScreen';
import QuestsActiveScreen from './screens/QuestsActiveScreen';
import QuestsAvailableScreen from './screens/QuestsAvailableScreen';
import Header from './Header';
import { tabImage } from '../shared/styles';

import { generateQuestList } from '../hooks/generateQuests';
import { generateHeroes } from '../hooks/generateHeroes';

const Tab = createBottomTabNavigator();

const Game = () => {
    const { setAvailableQuests, setAvailableHeroes } = useContext(AppContext);
    useEffect(() => {
        setAvailableQuests(generateQuestList(5));
        setAvailableHeroes(generateHeroes(10));
    }, []);
    return (
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
                        tabBarIcon: () => <Image style={tabImage} source={require("../assets/icons/ui/medieval-barracks.png")} />,
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
                        tabBarIcon: () => <Image style={tabImage} source={require("../assets/icons/ui/conqueror.png")} />,
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
                        tabBarIcon: () => <Image style={tabImage} source={require("../assets/icons/ui/tavern-sign.png")} />,
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
                        tabBarIcon: () => <Image style={tabImage} source={require("../assets/icons/ui/treasure-map.png")} />,
                        tabBarActiveBackgroundColor: "#2e2e2e",
                        tabBarInactiveBackgroundColor: "#000",
                        tabBarActiveTintColor: "#fff",
                        tabBarInactiveTintColor: "#fff"
                    }}
                />
            </Tab.Navigator>
      </NavigationContainer>
    );
}

export default Game;