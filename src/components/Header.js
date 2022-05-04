import { useContext } from "react"
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AppContext } from "../../AppProvider"
import { whiteText } from "../shared/styles";

const Header = () => {
    const { gold, day } = useContext(AppContext)
    const nextDay = () => {

    }
    return (
        <View style={styles.conatiner}>
            <View style={styles.innerContainer}>
                <View style={styles.itemContainer}>
                    <Image style={styles.uiImage} source={require("../assets/icons/ui/two-coins.png")} />
                    <Text style={[whiteText, styles.text]}> {gold}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Image style={styles.uiImage} source={require("../assets/icons/ui/sunrise.png")} />
                    <Text style={[whiteText, styles.text]}> {day}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Pressable onPress={nextDay()}>
                        <View style={styles.btn}>
                            <Text style={[styles.btnText]}>Next Day</Text>
                        </View>                        
                    </Pressable>
                </View>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {            
        height: 100,
        backgroundColor: '#000',
        elevation: 5,
        borderColor: '#fff',
        borderBottomWidth: 0.25
    },
    innerContainer: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemContainer: {
        flexDirection: "row"
    },
    uiImage: {
        height: 40,
        width: 40,
    },
    text: {
        fontSize: 30
    },
    btnText: {
        fontSize: 20,
        color: '#000'
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    }
});
export default Header;