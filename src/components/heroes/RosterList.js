import { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { AppContext } from "../../../AppProvider";
import { whiteText } from "../../shared/styles";
import RosterItem from "./RosterItem";
import { sumOfRosterHeroes } from "../../hooks/util";

export default RosterList = () => {
    const { roster } = useContext(AppContext);
    const viewHero = (index) => {
        console.log("Viewing hero " + roster[index].name);
    }
    return (
        <View>
            <Text style={[whiteText, styles.costText]}>Daily Cost: {sumOfRosterHeroes(roster)}</Text>
            <FlatList 
                data = {roster}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <RosterItem hero={item} handlePress={() => viewHero(index)}></RosterItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = {
    costText: {
        marginTop: 8,
        fontSize: 20,
        alignSelf: "center"
    }
}