import { View } from "react-native";
import QuestList from "../QuestList";
import { generateQuestList } from "../../hooks/generateQuests";

import { background } from "../../../shared/styles";

export default QuestsScreen = () => {
    let availableQuests = generateQuestList(5);
    return (
        <View style={background}>
            <QuestList data={availableQuests}></QuestList>
        </View>
    )
}