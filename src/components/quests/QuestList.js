import { useContext } from "react";
import { View, FlatList } from "react-native";
import { AppContext } from "../../../AppProvider";
import QuestItem from "./QuestItem";

export default QuestList = ({navigation}) => {
    const ctx = useContext(AppContext);
    return (
        <View>
            <FlatList 
                data = {ctx.availableQuests}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <QuestItem quest={item} navigation={navigation}></QuestItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}