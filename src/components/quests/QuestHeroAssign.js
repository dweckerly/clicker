import { useContext } from "react"
import { Text, View, FlatList, StyleSheet } from "react-native";
import { AppContext } from "../../../AppProvider"
import { background, flex, whiteText } from "../../shared/styles";
import QuestHeroAssignItem from "./QuestHeroAssignItem";

export default QuestHeroAssign = ({quest}) => {
    const { roster } = useContext(AppContext);
    if(roster.length > 0) {
        return (
            <View style={[background, flex]}>
                <Text>Assign Heroes!</Text>
                <FlatList 
                    data = {roster}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <QuestHeroAssignItem hero={item}></QuestHeroAssignItem> }
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        );
    }
    else {
        return (
            <View style={[background, styles.container]}>
                <Text style={[whiteText, styles.text]}>No Adventurers to assign.</Text>
                <Text style={[whiteText, styles.text]}>Hire Adventurers from the Tavern.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    }
});