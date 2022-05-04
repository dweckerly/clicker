import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../../../AppProvider";
import RosterList from "../heroes/RosterList";
import { background, whiteText } from "../../shared/styles";

const HeroRosterScreen = () => {
    const { nonQuestingHeroes } = useContext(AppContext);
    const { questingHeroes } = useContext(AppContext);
    return [...nonQuestingHeroes, ...questingHeroes ].length > 0 ? 
            <View style={background}>
                <RosterList></RosterList>
            </View>
            :
            <View style={[background, styles.container]}>
                <Text style={[whiteText, styles.text]}>No Adventurers in your Guild.</Text>
                <Text style={[whiteText, styles.text]}>Hire Adventurers from the Tavern.</Text>
            </View>
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
})
export default HeroRosterScreen;