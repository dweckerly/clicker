import { Image, StyleSheet, View, Text } from "react-native";
import Classes from "../data/Classes";
import { whiteText } from "../../shared/styles";

const HeroItem = ({hero}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Classes[hero.icon].icon} />
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={[whiteText, styles.name]}>{hero.name}</Text>                    
                </View> 
                <View>
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../assets/icons/ui/heart.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.hp}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../assets/icons/ui/strong.png")} /> 
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.might}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../assets/icons/ui/magic-swirl.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.magic}</Text>
                        </View>                                                            
                    </View>  
                </View>                                         
            </View>             
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
        justifyContent: "space-around"
    },
    stat: {
        flexDirection: "row"
    },
    name: {
        fontSize: 24
    },
    uiImage: {
        height: 20,
        width: 20,
    },
    statFont: {
        fontSize: 16
    },
    hireBtn: {
        backgroundColor: "#fff",
        height: 70,
        width: 70,
        borderRadius: 50,
        alignContent: "center"
    }
});

export default HeroItem;