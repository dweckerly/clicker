import { View } from "react-native";
import HeroHireList from "../heroes/HeroHireList";
import { background } from "../../shared/styles";
import { generateHero } from "../../hooks/generateHeroes";

export default HeroHireScreen = () => {
    return (
        <View style={background}>
            <HeroHireList></HeroHireList>
        </View>
    );
}