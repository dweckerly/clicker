import { Modal, Button, Text, View, FlatList, Pressable, StyleSheet, useWindowDimensions, Image } from "react-native";
import { useContext, useState } from "react"
import { AppContext } from "../../../AppProvider"
import { styles } from "../../shared/hero-item-style";
import { whiteText } from "../../shared/styles";
import QuestHeroAssignItem from "./QuestHeroAssignItem";
import Specials from "../../data/Specials";

const QuestHeroAssignModal = ({ modalVisible, setModalVisible, quest }) => {
    const window = useWindowDimensions();
    const { nonQuestingHeroes } = useContext(AppContext);
    const [selectedHeroes, setselectedHeroes] = useState([]);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={ () => setModalVisible(!modalVisible) }
        >
            <View style={[style.modalView, {width: window.width - 20}]}>
                <FlatList 
                    data = {nonQuestingHeroes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <QuestHeroAssignItem hero={item} handlePress={() => viewHero(index)}></QuestHeroAssignItem> }
                    showsVerticalScrollIndicator = {false}
                />
                <View style={style.stats}>
                    <View style={style.stat}>
                        <Image style={style.uiImage} source={require("../../assets/icons/ui/strong.png")}/>
                        <Text style={[whiteText, style.statText]}>{quest.requirements.might}</Text>
                    </View>
                    <View style={style.stat}>
                        <Image style={style.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")}/>
                        <Text style={[whiteText, style.statText]}>{quest.requirements.magic}</Text>
                    </View>
                    <View style={style.stat}>
                        <Image style={style.uiImage} source={require("../../assets/icons/ui/sands-of-time.png")}/>
                        <Text style={[whiteText, style.statText]}>{quest.time}</Text>
                    </View>
                    <View style={style.stat}>
                        <Image style={style.uiImage} source={require("../../assets/icons/ui/two-coins.png")}/>
                        <Text style={[whiteText, style.statText]}>{quest.reward}</Text>
                    </View>
                    
                </View>
                <FlatList 
                    data = {quest.requirements.special}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Image style={style.uiImage} source={Specials[item].icon}/>}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                />
                <View style={style.btnContainer}>
                    <Button 
                        disabled={selectedHeroes.length > 0 ? false : true}
                        title="Accept"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>                    
            </View>                          
        </Modal>
    );
}

const style = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 1,
        elevation: 5,
        margin: 10
    },
    stats: {
        height: 40,
        backgroundColor: '#000',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    stat: {
        flexDirection: "row",
        marginRight: 20,
    },
    statText: {
      fontSize: 16  
    },
    uiImage: {
        height: 20,
        width: 20,
    },
    btnContainer: {
        flexDirection: "row"
    }
});
export default QuestHeroAssignModal;