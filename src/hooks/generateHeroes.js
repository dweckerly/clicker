import uuid from "react-native-uuid";

import Classes from "../data/Classes";
import Names from "../data/Names";
import Specials from "../data/Specials";

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

const baseRandom = {
    "min": 0.5,
    "max": 0.9
}

function setCost(heroClass, level, mod) {
    let cost = heroClass.cost;
    cost *= level;
    return Math.round(cost * getRandomFloat(baseRandom.min + mod, baseRandom.max + mod, 3))
}

function setStat(stat, level, mod) {
    let newStat = stat * level;
    return Math.round(newStat * getRandomFloat(baseRandom.min + mod, baseRandom.max + mod,  3))
}

function setSpecial(specials) {
    return specials[getRandomInt(specials.length)];
}

export function generateHeroes(max) {
    let heroArr = []
    for(let i = 0; i < max; i++) {
        heroArr.push(generateHero());
    }
    return heroArr;
}

export function generateHero() {
    const classLength = Classes.length;
    const classIndex = getRandomInt(classLength);
    const heroClass = Classes[classIndex];
    const level = 1;
    const modifier = getRandomFloat(0.2, 0.5, 3);
    return {
        "id": uuid.v4(),
        "name": setHeroName(heroClass),
        "icon": classIndex,
        "level": level,
        "cost": setCost(heroClass, level, modifier),
        "stats": {
            "hp": setStat(heroClass.stats.hp, level, modifier),
            "might": setStat(heroClass.stats.might, level, modifier),
            "magic": setStat(heroClass.stats.magic, level, modifier)
        },
        "special": Specials[setSpecial(heroClass.special)]
    }
}