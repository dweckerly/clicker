import { useContext, useEffect, useState } from "react"
import { Text, View, FlatList, StyleSheet, BackHandler } from "react-native";
import { AppContext } from "../../../AppProvider"
import { background, flex, whiteText } from "../../shared/styles";
import QuestHeroAssignItem from "./QuestHeroAssignItem";

const QuestHeroAssign = ({quest}) => {
    const { roster } = useContext(AppContext);
    const [ assignedHeroes, setAssignedHeroes ] = useState([]);
    const [ unAssignedHeroes, setUnassignedHeroes ] = useState([]);
    const addAssignedHero = (hero) => {
        let heroArr = [...assignedHeroes];
        heroArr.push(hero);
        setAssignedHeroes(heroArr);
        removeUnassignedHero(hero)
    }
    const removeAssignedHero = (hero) => {
        let heroArr = [...assignedHeroes];
        setAssignedHeroes(heroArr.filter((el) => {
            return el.id != hero.id;
        }));
        addUnassignedHero(hero);
    }
    const addUnassignedHero = (hero) => {
        let heroArr = [...unAssignedHeroes];
        heroArr.push(hero);
        setUnassignedHeroes(heroArr);
    }
    const removeUnassignedHero = (hero) => {
        let heroArr = [...unAssignedHeroes];
        setUnassignedHeroes(heroArr.filter((el) => {
            return el.id != hero.id;
        }));
    }
    useEffect(() => {
        setUnassignedHeroes(roster);
    }, []);
    useEffect(()=> {
        const backAction = () => {
            for(let i = 0; i < assignedHeroes.length; i++) {
                removeAssignedHero(assignedHeroes[i]);
            }
        }
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    if(roster.length > 0) {
        return (
            <View style={[background, styles.wrapper]}>
                <View style={styles.break}>
                    <Text style={[whiteText, styles.breakText]}>Roster</Text>
                </View>
                <View style={[background, flex]}>
                    <FlatList 
                        data = {unAssignedHeroes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <QuestHeroAssignItem hero={item} handlePress={addAssignedHero} ></QuestHeroAssignItem> }
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
                <View style={styles.break}>
                    <Text style={[whiteText, styles.breakText]}>Assigned</Text>
                </View>
                <View style={[background, flex]}>
                    <FlatList 
                        data = {assignedHeroes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <QuestHeroAssignItem hero={item} handlePress={removeAssignedHero} ></QuestHeroAssignItem> }
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
                <View style={styles.break}>
                    <Text style={[whiteText, styles.breakText]}>Start</Text>
                </View>
            </View>            
        );
    }
    else {
        return (
            <View style={[background, styles.container]}>
                <Text style={[whiteText, styles.text]}>No Adventurers to assign.</Text>
                <Text style={[whiteText, styles.text]}>Hire Adventurers from the Tavern.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 1000
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    },
    break: {
        borderColor: '#fff',
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        backgroundColor: '#000',
        padding: 10
    },
    breakText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default QuestHeroAssign;