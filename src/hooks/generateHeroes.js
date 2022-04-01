import uuid from "react-native-uuid";

import Classes from "../data/Classes";
import Names from "../data/Names";

import { getRandomInt, getRandomFloat } from './util';
  
function setHeroName(heroClass) {
    const maleNamesLength = Names.male.length;
    const femaleNamesLength = Names.female.length;
    const title = heroClass.titles[getRandomInt(heroClass.titles.length)];
    if(heroClass.gender == 'male') {
        if(title.placement == 'suffix') {
            return Names.male[getRandomInt(maleNamesLength)] + title.name;
        }
        else if (title.placement == 'prefix') {
            return title.name + Names.male[getRandomInt(maleNamesLength)];
        }
    }
    else if (heroClass.gender == 'female') {
        if(title.placement == 'suffix') {
            return Names.female[getRandomInt(femaleNamesLength)] + title.name;
        }
        else if (title.placement == 'prefix') {
            return title.name + Names.female[getRandomInt(femaleNamesLength)];
        }
    }
}

function setCost(heroClass, level) {
    let cost = heroClass.cost;
    cost *= level;
    return Math.round(cost * getRandomFloat(0.8, 1.2, 3))
}
  
export function generateHero() {
    const classLength = Classes.length;
    const classIndex = getRandomInt(classLength);
    const heroClass = Classes[classIndex];
    return {
        "id": uuid.v4(),
        "name": setHeroName(heroClass),
        "icon": classIndex,
        "level": 1,
        "cost": setCost(heroClass, 1),
        "stats": {
            "hp": heroClass.stats.hp,
            "might": heroClass.stats.might,
            "magic": heroClass.stats.magic
        }
    }
}