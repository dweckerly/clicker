import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../../../AppProvider";
import RosterList from "../heroes/RosterList";
import { background, whiteText } from "../../shared/styles";

export default HeroRosterScreen = () => {
    const ctx = useContext(AppContext);
    if(ctx.roster.length > 0) {
        return (
            <View style={background}>
                <RosterList></RosterList>
            </View>
        );
    } 
    else {
        return (
            <View style={[background, styles.container]}>
                <Text style={[whiteText, styles.text]}>No Adventurers in your Guild.</Text>
                <Text style={[whiteText, styles.text]}>Head to the Tavern to hire Adventurers.</Text>
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
}) 