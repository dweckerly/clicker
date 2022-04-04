import { useContext } from "react";
import { View } from "react-native";

import QuestList from "../quests/QuestList";
import { background } from "../../../shared/styles";
import { AppContext } from "../../../AppProvider";

export default QuestsAactiveScreen = () => {
    const ctx = useContext(AppContext);
    return (
        <View style={background}>
            <QuestList data={ctx.activeQuests}></QuestList>
        </View>
    )
}