import { View } from "react-native";
import HeroHireList from "../HeroHireList";
import { background } from "../../../shared/styles";
import { generateHero } from "../../hooks/generateHeroes";

export default HeroHireScreen = () => {
    let heroData = []
    for(let i = 0; i < 10; i++) {
        heroData.push(generateHero());
    }
    return (
        <View style={background}>
            <HeroHireList data={heroData}></HeroHireList>
        </View>
    );
}