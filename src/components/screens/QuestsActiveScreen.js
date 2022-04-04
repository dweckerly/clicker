import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import QuestList from "../quests/QuestList";
import { background, flex, whiteText } from "../../shared/styles";
import { AppContext } from "../../../AppProvider";

export default QuestsAactiveScreen = () => {
    const ctx = useContext(AppContext);
    if(ctx.activeQuests.length > 0) {
        return (
            <View style={background}>
                <QuestList data={ctx.activeQuests}></QuestList>
            </View>
        )
    }
    else {
        return (
            <View style={[background, flex, styles.container]}>
                <Text style={[whiteText, styles.text]}>No active Quests.</Text>
                <Text style={[whiteText, styles.text]}>Check the Board for new Quests.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    }
}) 
