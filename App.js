import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContext from './AppContext';

import HeroesScreen from './src/components/screens/HeroesScreen';
import QuestsScreen from './src/components/screens/QuestsScreen';
import Header from './src/components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
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
      <Header></Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Heroes" component={HeroesScreen} />
          <Tab.Screen name="Quests" component={QuestsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
