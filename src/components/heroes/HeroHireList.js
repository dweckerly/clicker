import { View, FlatList } from "react-native";
import { useContext } from "react";
import HeroItem from "./HeroItem";
import { AppContext } from "../../../AppProvider";

export default HeroHireList = () => {
    const { availableHeroes } = useContext(AppContext);
    return (
        <View>
            <FlatList 
                data = {availableHeroes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <HeroItem hero={item}></HeroItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}
