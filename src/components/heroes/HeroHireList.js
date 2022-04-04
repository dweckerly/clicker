import { View, FlatList } from "react-native";
import { useState } from "react";
import HeroItem from "./HeroItem";

export default HeroHireList = ({data}) => {
    const [heroList, setHeroList] = useState(data);
    const removeHero = (index) => {
        list = [...heroList];
        list.splice(index, 1);
        setHeroList(list);
    }
    return (
        <View>
            <FlatList 
                data = {heroList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <HeroItem hero={item} handlePress={() => removeHero(index)}></HeroItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}
