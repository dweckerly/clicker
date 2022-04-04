import { useContext } from "react";
import { FlatList, View } from "react-native";
import { AppContext } from "../../../AppProvider";
import RosterItem from "./RosterItem";

export default RosterList = () => {
    const ctx = useContext(AppContext);
    const viewHero = (index) => {
        console.log("Viewing hero " + ctx.roster[index].name);
    }
    return (
        <View>
            <FlatList 
                data = {ctx.roster}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <RosterItem hero={item} handlePress={() => viewHero(index)}></RosterItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}