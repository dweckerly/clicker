import { useContext } from "react";
import { generateQuestList } from "../../hooks/generateQuests";
import { AppContext } from "../../../AppProvider";
import { View } from "react-native";
import QuestList from "../quests/QuestList";
import { background } from "../../shared/styles";

export default QuestBoard = ({navigation}) => { 
    const ctx = useContext(AppContext);
    if(ctx.availableQuests.length < 1) {
        ctx.setAvailableQuests(generateQuestList(5));
    }
    return (
        <View style={background}>
            <QuestList navigation={navigation}></QuestList>
        </View>
    )
}