import { Image, StyleSheet, View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';

import Classes from "../../data/Classes";
import { whiteText } from "../../shared/styles"
import { AppContext } from "../../../AppProvider";

export default HeroItem = ({hero}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const ctx = useContext(AppContext);
    return (
        <View>
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
                                    ctx.updateGold(hero.cost * -1);
                                    ctx.addToRoster(hero);
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
            <TouchableOpacity 
                style={styles.container}
                onPress={() => setModalVisible(true)}
            >
                <Image style={styles.image} source={Classes[hero.icon].icon} />
                <View style={styles.infoContainer}>
                    <View style={styles.header}>
                        <Text style={[whiteText, styles.name]}>{hero.name}</Text>                    
                    </View> 
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/heart.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.hp}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/strong.png")} /> 
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.might}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.magic}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/two-coins.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.cost}</Text>
                        </View>                                                             
                    </View>                                        
                </View>  
            </TouchableOpacity>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
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
    image: {
        height: 100,
        width: 100,
        marginLeft: 15
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10
    },
    header: {
        alignSelf: "center"
    },
    stats: {
        flexDirection: "row",
        justifyContent: "center"
    },
    stat: {
        flexDirection: "row",
        marginRight: 20
    },
    name: {
        fontSize: 20
    },
    uiImage: {
        height: 20,
        width: 20,
    },
    statFont: {
        fontSize: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "#000",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 20,
        margin: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      btnContainer: {
          flexDirection: "row"
      }
});