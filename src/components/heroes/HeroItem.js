import { Image,  View, Text, TouchableOpacity } from "react-native";
import { useState } from 'react';

import Classes from "../../data/Classes";
import { whiteText } from "../../shared/styles"

import { styles } from "../../shared/hero-item-style";
import HeroHireModal from "./HeroHireModal";

export default HeroItem = ({hero}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <HeroHireModal modalVisible={modalVisible} setModalVisible={setModalVisible} hero={hero} />
            <TouchableOpacity 
                style={styles.container}
                onPress={() => setModalVisible(true)}
            >
                <Image style={styles.image} source={Classes[hero.icon].icon} />
                <View style={styles.infoContainer}>
                    <View style={styles.header}>
                        <Text style={[whiteText, styles.name]}>{hero.name}</Text>                    
                    </View> 
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/heart.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.hp}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/strong.png")} /> 
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.might}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/magic-swirl.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.stats.magic}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Image style={styles.uiImage} source={require("../../assets/icons/ui/two-coins.png")} />
                            <Text style={[whiteText, styles.statFont]}>{hero.cost}</Text>
                        </View>                                                             
                    </View>                                        
                </View>  
            </TouchableOpacity>
        </View>        
    );
}

