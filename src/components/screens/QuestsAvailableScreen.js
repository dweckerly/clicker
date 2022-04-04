import { View } from "react-native";
import { generateQuestList } from "../../hooks/generateQuests";
import QuestList from "../quests/QuestList";
import { background } from "../../../shared/styles";

export default QuestsAvailableScreen = () => {
    let availableQuests = generateQuestList(5);
    return (
        <View style={background}>
            <QuestList data={availableQuests}></QuestList>
        </View>
    )
}