import React, { useState, createContext } from "react";
export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [gold, setGold] = useState(100);
    const [roster, setRoster] = useState([]);
    const [activeQuests, setActiveQuests] = useState([]);
    const [completedQuests, setCompletedQuests] = useState([]);

    const updateGold = (amount) => {
        const newGold = gold + amount;
        setGold(newGold);
    }

    const addToRoster = (hero) => {
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

    const addActiveQuest = (quest) => {
        let quests = [...activeQuests];
        quests.push(quest);
        setActiveQuests(quests);
    }

    const removeActiveQuest = (quest) => {
        let quests = [...activeQuests];
        setRoster(quests.filter((el) => {
            return el.name != quest.name;
        }));
    }

    const addCompletedQuests = (quest) => {
        let newArr = [...completedQuests];
        newArr.push(quest);
        setRoster(newArr);
    }

    const globalSettings = {
        gold: gold,
        updateGold,
        roster: roster,
        addToRoster,
        removeFromRoster,
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