import { StyleSheet, View, Image, Text, Button, FlatList } from "react-native";
import { useState, useContext } from "react";
import { background, flex, whiteText } from "../../shared/styles";
import Specials from "../../data/Specials";
import QuestHeroAssignModal from "./QuestHeroAssignModal";
import { AppContext } from "../../../AppProvider";

const QuestDetails = ({route}) => {
    const { quest } = route.params;
    const { nonQuestingHeroes } = useContext(AppContext)
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[flex, background]}>
            <QuestHeroAssignModal modalVisible={modalVisible} setModalVisible={setModalVisible} quest={quest} ></QuestHeroAssignModal>
            <View style={styles.container}>
                <Image style={styles.image} source={quest.icon} />
                <View style={styles.descContainer}>
                    <Text style={[whiteText, styles.text]}>{quest.description}</Text>
                    <FlatList 
                        data = {quest.requirements.special}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Image style={{height: 40, width: 40, marginRight: 10}} source={Specials[item].icon}/>}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                    />
                </View>
            </View>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/strong.png")}/>
                    <Text style={[whiteText, styles.statText]}>{quest.requirements.might}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")}/>
                    <Text style={[whiteText, styles.statText]}>{quest.requirements.magic}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/sands-of-time.png")}/>
                    <Text style={[whiteText, styles.statText]}>{quest.time}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/two-coins.png")}/>
                    <Text style={[whiteText, styles.statText]}>{quest.reward}</Text>
                </View>
            </View>
            <View style={styles.startBtnContainer}>
                {
                    nonQuestingHeroes.length > 0 ? 
                    <Button 
                        title="Assign Adventurers"
                        onPress={() => setModalVisible(true)}
                    />
                    :
                    <View style={styles.emptyContainer}>
                        <Text style={[whiteText, styles.emptyText]}>No Adventurers to assign.</Text>
                        <Text style={[whiteText, styles.emptyText]}>Hire Adventurers from the Tavern.</Text>
                    </View>
                }
                
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        marginLeft: 15
    },
    container: {
        height: 200,
        //backgroundColor: '#1f1f1f',
        backgroundColor: '#000',
        alignSelf: "stretch",
        borderRadius: 10,
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    descContainer: {
        margin: 10,
        flex: 1
    },
    text: {
        fontSize: 22,
        flex: 9,
        flexWrap: 'wrap'
    },
    stats: {
        height: 50,
        backgroundColor: '#000',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    stat: {
        flexDirection: "row",
        marginRight: 20
    },
    statText: {
      fontSize: 24  
    },
    name: {
        fontSize: 20
    },
    uiImage: {
        height: 30,
        width: 30,
    },
    startBtnContainer: {
        margin: 10
    },
    emptyContainer: {
        alignItems: "center"
    },
    emptyText: {
        fontSize: 22
    }
})

export default QuestDetails;