import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuestsActiveScreen from "./QuestsActiveScreen";
import QuestsAvailableScreen from './QuestsAvailableScreen';

const Tab = createBottomTabNavigator();

export default QuestsScreen = () => {
    return (
        <NavigationContainer
            independent = {true}
        >
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Active" component={QuestsActiveScreen} />
                <Tab.Screen name="Available" component={QuestsAvailableScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}