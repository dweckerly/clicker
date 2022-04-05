import { View, FlatList } from "react-native";
import { useContext, useState } from "react";
import HeroItem from "./HeroItem";
import { AppContext } from "../../../AppProvider";

export default HeroHireList = () => {
    const ctx = useContext(AppContext);
    return (
        <View>
            <FlatList 
                data = {ctx.availableHeroes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <HeroItem hero={item}></HeroItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}
