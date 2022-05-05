import { Modal, Text, View, FlatList, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { useContext, useState } from "react"
import { AppContext } from "../../../AppProvider"
import { styles } from "../../shared/hero-item-style";
import { whiteText } from "../../shared/styles";
import RosterItem from "../heroes/RosterItem";

const QuestHeroAssignModal = ({ modalVisible, setModalVisible }) => {
    const window = useWindowDimensions();
    const { nonQuestingHeroes } = useContext(AppContext);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={ () => setModalVisible(!modalVisible) }
        >
            <View style={styles.centeredView}>
                <View style={[style.modalView, {width: window.width}]}>
                    <FlatList 
                        data = {nonQuestingHeroes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <RosterItem hero={item} handlePress={() => viewHero(index)}></RosterItem> }
                        showsVerticalScrollIndicator = {false}
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
        backgroundColor: "#000",
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 1,
        padding: 35,
        alignItems: "center",
        elevation: 5
      }
});
export default QuestHeroAssignModal;