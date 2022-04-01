import { useState } from "react";
import { View, FlatList } from "react-native";
import QuestItem from "./QuestItem";

export default QuestList = ({data}) => {
    const [questList, setQuestList] = useState(data);
    return (
        <View>
            <FlatList 
                data = {questList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <QuestItem quest={item}></QuestItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}