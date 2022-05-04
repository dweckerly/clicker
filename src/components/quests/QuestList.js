import { useContext } from "react";
import { View, FlatList } from "react-native";
import { AppContext } from "../../../AppProvider";
import QuestItem from "./QuestItem";

const QuestList = ({navigation}) => {
    const { availableQuests } = useContext(AppContext);
    return (
        <View>
            <FlatList 
                data = {availableQuests}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <QuestItem quest={item} navigation={navigation}></QuestItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

export default QuestList;