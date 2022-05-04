import React, { useState, createContext } from "react";
export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [gold, setGold] = useState(100);
    const [day, setDay] = useState(1);
    const [questingHeroes, setQuestingHeroes] = useState([]);
    const [nonQuestingHeroes, setNonQuestingHeroes] = useState([]);
    const [availableHeroes, setAvailableHeroes] = useState([])
    const [availableQuests, setAvailableQuests] = useState([]);
    const [activeQuests, setActiveQuests] = useState([]);
    const [completedQuests, setCompletedQuests] = useState([]);

    const updateGold = (amount) => {
        const newGold = gold + amount;
        setGold(newGold);
    }

    const increaseDay = () => {
        const newDay = day++;
        setDay(newDay);
    }

    const addToRoster = (hero) => {
        let heroArr = [...availableHeroes];
        setAvailableHeroes(heroArr.filter((el) => {
            return el.id != hero.id;
        }));
        let newRoster = [...nonQuestingHeroes];
        newRoster.push(hero);
        setNonQuestingHeroes(newRoster);
    }

    const addQuestingHero = (hero) => {
        let heroArr = [...nonQuestingHeroes];
        setAvailableHeroes(heroArr.filter((el) => {
            return el.id != hero.id;
        }));
        let newRoster = [...questingHeroes];
        newRoster.push(hero);
        setQuestingHeroes(newRoster);
    }

    const removeFromRoster = (hero) => {
        let newRoster = [...nonQuestingHeroes];
        setNonQuestingHeroes(newRoster.filter((el) => {
            return el.id != hero.id;
        }));
    }

    const removeFromQuesting = (hero) => {
        let newRoster = [...questingHeroes];
        setQuestingHeroes(newRoster.filter((el) => {
            return el.id != hero.id;
        }));
    }

    const addAvailableQuests = (quest) => {
        let quests = [...availableQuests];
        quests.push(quest);
        setAvailableQuests(quests);
    }

    const removeAvailableQuests = (quest) => {
        let quests = [...availableQuests];
        setAvailableQuests(quests.filter((el) => {
            return el.name != quest.name;
        }));
    }

    const addActiveQuest = (quest) => {
        let quests = [...activeQuests];
        quests.push(quest);
        setActiveQuests(quests);
    }

    const removeActiveQuest = (quest) => {
        let quests = [...activeQuests];
        setActiveQuests(quests.filter((el) => {
            return el.name != quest.name;
        }));
    }

    const addCompletedQuests = (quest) => {
        let newArr = [...completedQuests];
        newArr.push(quest);
        setCompletedQuests(newArr);
    }

    const globalSettings = {
        gold: gold,
        updateGold,
        day: day,
        increaseDay,
        questingHeroes: questingHeroes,
        addToRoster,
        removeFromRoster,
        nonQuestingHeroes: nonQuestingHeroes,
        addQuestingHero,
        removeFromQuesting,
        availableHeroes: availableHeroes,
        setAvailableHeroes,
        availableQuests: availableQuests,
        setAvailableQuests,
        addAvailableQuests,
        removeAvailableQuests,
        activeQuests: activeQuests,
        addActiveQuest,
        removeActiveQuest,
        completedQuests: completedQuests,
        addCompletedQuests
    }
    return (
        <AppContext.Provider value={globalSettings}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider
