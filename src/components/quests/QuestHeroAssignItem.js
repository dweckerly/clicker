import { Image, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { useState } from "react";
import { whiteText } from "../../shared/styles";
import Classes from "../../data/Classes";
import Specials from "../../data/Specials";

const QuestHeroAssignItem = ({hero, handlePress}) => {
    const window = useWindowDimensions();
    const [pressed, setPressed] = useState(false);
    return (
        <View>
            <TouchableOpacity 
                style={[{width: window.width - 40}, pressed ? styles.pressed : styles.notPressed, styles.container]}
                onPress={() => {
                    //handlePress(hero);
                    setPressed(!pressed);
                }}
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
                    </View>                                        
                </View>  
                <Image style={styles.image} source={Specials[hero.special].icon} /> 
            </TouchableOpacity>
        </View>
    );
}

export const styles = {
    container: {    
        alignSelf: "stretch",    
        marginVertical: 10,
        marginLeft: 0,
        marginRight: 0,
        borderColor: "white",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    pressed: {
        backgroundColor: '#2196F3',
    },
    notPressed: {
        backgroundColor: '#000',
    },
    image: {
        height: 50,
        width: 50
    },
    infoContainer: {
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1
    },
    header: {
        alignSelf: "center"
    },
    stats: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 10
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
}

export default QuestHeroAssignItem;