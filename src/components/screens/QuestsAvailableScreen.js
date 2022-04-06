import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QuestBoard from "../quests/QuestBoard";
import QuestDetails from "../quests/QuestDetails";
import QuestHeroAssign from "../quests/QuestHeroAssign";

const Stack = createNativeStackNavigator();

export default QuestsAvailableScreen = () => {
    return (
        <NavigationContainer
            independent={true}
        >
            <Stack.Navigator>
                <Stack.Screen 
                    name="Board" 
                    component={QuestBoard} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="QuestDetails" 
                    component={QuestDetails}
                    options={
                        ({ route }) => ({ 
                            title: route.params.quest.name,
                            headerTitleAlign: 'center',
                            headerStyle: styles.header,
                            headerTitleStyle: styles.headerTitle,
                            headerTintColor: '#fff'
                        })                        
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#000"
    },
    headerTitle: {
      color: "#fff"
    }
  });