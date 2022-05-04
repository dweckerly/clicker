import { Modal, View, Image, Pressable, Text } from "react-native";
import { useContext } from "react"
import { AppContext } from "../../../AppProvider"
import { styles } from "../../shared/hero-item-style";
import { whiteText } from "../../shared/styles";
import Classes from "../../data/Classes";

const HeroHireModal = ({ modalVisible, setModalVisible, hero }) => {
    const { addToRoster } = useContext(AppContext);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible) }
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image style={styles.image} source={Classes[hero.icon].icon} />
                    <Text style={[whiteText, styles.modalText]}>Hire {hero.name}?</Text>
                    <View style={styles.btnContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                addToRoster(hero);
                            }}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>No</Text>
                        </Pressable>
                    </View>                        
                </View>
            </View>
        </Modal>
    );
}

export default HeroHireModal;