const { View, FlatList } = require("react-native");
import { HeroItem } from "./HeroItem";

const HeroHireList = ({data}) => {
    return (
        <View>
            <FlatList 
                data = {data}
                keyExtractor={(item) => {item.id}}
                renderItem={({item}) => <HeroItem hero={item}></HeroItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

export default HeroHireList;