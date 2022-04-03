import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { generateHero } from "../../hooks/generateHeroes"

import HeroHireScreen from "./HeroHireScreen";
import HeroRosterScreen from "./HeroRosterScreen";

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
            <Tab.Navigator>
                <Tab.Screen name="Roster" component={HeroRosterScreen} />
                <Tab.Screen name="Hire" component={HeroHireScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}