import { useContext } from "react"
import { View, Text, StyleSheet, Image } from "react-native";
import AppContext from "../../AppContext"
import { whiteText } from "../../shared/styles";

export default Header = () => {
    const ctx = useContext(AppContext);
    return (
        <View style={styles.conatiner}>
            <View style={styles.innerContainer}>
                <Image style={styles.uiImage} source={require("../assets/icons/ui/two-coins.png")} />
                <Text style={[whiteText, styles.text]}> {ctx.gold}</Text>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {            
        height: 100,
        backgroundColor: '#000'
    },
    innerContainer: {
        marginTop: 30,
        marginLeft: 20,
        flex: 1,
        flexDirection: "row"
    },
    uiImage: {
        height: 40,
        width: 40,
    },
    text: {
        fontSize: 30
    }
})