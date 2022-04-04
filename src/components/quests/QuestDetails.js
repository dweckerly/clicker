import { StyleSheet, View, Image, Text } from "react-native";
import { background, flex, whiteText } from "../../shared/styles";

export default QuestDetails = ({route}) => {
    const { quest } = route.params;
    return (
        <View style={[flex, background]}>
            <View style={styles.container}>
                <Image style={styles.image} source={quest.icon} />
                <Text style={[whiteText, styles.text]}>{quest.description}</Text>
            </View>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/heart.png")}/>
                    <Text style={[whiteText]}>{quest.requirements.hp}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/strong.png")}/>
                    <Text style={[whiteText]}>{quest.requirements.might}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")}/>
                    <Text style={[whiteText]}>{quest.requirements.magic}</Text>
                </View>
                <View style={styles.stat}>
                    <Image style={styles.uiImage} source={require("../../assets/icons/ui/sands-of-time.png")}/>
                    <Text style={[whiteText]}>{quest.time}</Text>
                </View>
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
    text: {
        marginLeft: 10,
        fontSize: 24,
        flex: 1,
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
    name: {
        fontSize: 20
    },
    uiImage: {
        height: 20,
        width: 20,
    },
})