import { useState } from "react";
import { View, FlatList } from "react-native";
import QuestItem from "./QuestItem";

export default QuestList = ({data, navigation}) => {
    const [questList, setQuestList] = useState(data);
    return (
        <View>
            <FlatList 
                data = {questList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <QuestItem quest={item} navigation={navigation}></QuestItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}