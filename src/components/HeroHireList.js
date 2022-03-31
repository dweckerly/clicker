const { View, FlatList, StyleSheet } = require("react-native");
import { useState } from "react";
import HeroItem from "./HeroItem";

export default HeroHireList = ({data}) => {
    const [heroList, setHeroList] = useState(data);
    const removeHero = (index) => {
        setHeroList(heroList.splice(index, 1));
    }
    return (
        <View>
            <FlatList 
                data = {heroList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <HeroItem hero={item}></HeroItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}
