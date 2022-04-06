import { View } from "react-native";
import QuestList from "../quests/QuestList";
import { background } from "../../shared/styles";

export default QuestBoard = ({navigation}) => { 
    return (
        <View style={background}>
            <QuestList navigation={navigation}></QuestList>
        </View>
    )
}