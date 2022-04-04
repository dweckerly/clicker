import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../../../AppProvider";
import RosterList from "../heroes/RosterList";
import { background } from "../../shared/styles";

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
                <Text>Hire Heroes and add them to your Roster!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    }
}) 