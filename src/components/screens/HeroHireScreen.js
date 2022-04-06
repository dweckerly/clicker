import { View } from "react-native";
import HeroHireList from "../heroes/HeroHireList";
import { background } from "../../shared/styles";

export default HeroHireScreen = () => {
    return (
        <View style={background}>
            <HeroHireList></HeroHireList>
        </View>
    );
}