import React, { useState, createContext } from "react";
export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [gold, setGold] = useState(100);
    const [day, setDay] = useState(1);
    const [roster, setRoster] = useState([]);
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
        let newRoster = [...roster];
        newRoster.push(hero);
        setRoster(newRoster);
    }

    const removeFromRoster = (hero) => {
        let newRoster = [...roster];
        setRoster(newRoster.filter((el) => {
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
        roster: roster,
        addToRoster,
        removeFromRoster,
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
