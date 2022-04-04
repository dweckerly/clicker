import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { generateHero } from "../../hooks/generateHeroes"

import HeroHireScreen from "./HeroHireScreen";
import HeroRosterScreen from "./HeroRosterScreen";
import { tabImage } from '../../shared/styles';

const Tab = createBottomTabNavigator();

export default HeroesScreen = () => {
    let heroData = []
    for(let i = 0; i < 10; i++) {
        heroData.push(generateHero());
    }
    return (
        <NavigationContainer
            independent = {true}
        >
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Roster" component={HeroRosterScreen} />
                <Tab.Screen 
                    name="Tavern" 
                    component={HeroHireScreen}
                    options={{
                        tabBarIcon: () => <Image style={tabImage} source={require("../../assets/icons/ui/tavern-sign.png")} />
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
