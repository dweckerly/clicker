import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { whiteText } from "../../shared/styles";

export default QuestItem = ({quest, navigation}) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate("QuestDetails", { quest: quest })}
        >
            <Image style={styles.image} source={quest.icon} />
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={[whiteText, styles.name]}>{quest.name}</Text>                    
                </View> 
                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Image style={styles.uiImage} source={require("../../assets/icons/ui/strong.png")} /> 
                        <Text style={[whiteText, styles.statFont]}>{quest.requirements.might}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Image style={styles.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")} />
                        <Text style={[whiteText, styles.statFont]}>{quest.requirements.magic}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Image style={styles.uiImage} source={require("../../assets/icons/ui/sands-of-time.png")} />
                        <Text style={[whiteText, styles.statFont]}>{quest.time}</Text>
                    </View> 
                    <View style={styles.stat}>
                        <Image style={styles.uiImage} source={require("../../assets/icons/ui/two-coins.png")} />
                        <Text style={[whiteText, styles.statFont]}>{quest.reward}</Text>
                    </View>                                                            
                </View>                                        
            </View> 
        </TouchableOpacity>
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
});