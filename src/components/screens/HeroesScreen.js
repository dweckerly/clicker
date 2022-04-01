import { View } from "react-native"
import HeroHireList from "../HeroHireList"

import { generateHero } from "../../hooks/generateHeroes"

import { background } from "../../../shared/styles"

export default HeroesScreen = () => {
    let heroData = []
    for(let i = 0; i < 10; i++) {
        heroData.push(generateHero());
    }
    return (
        <View style={background}>
            <HeroHireList data={heroData}></HeroHireList>
        </View>
    )
}