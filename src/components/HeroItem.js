import { Image, StyleSheet, View } from "react-native";
import Heroes from "../data/Heroes";

const HeroItem = ({icon}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Heroes[icon]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        backgroundColor: '#1f1f1f',
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
    }
});

export default HeroItem;