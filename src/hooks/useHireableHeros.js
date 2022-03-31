import Classes from "../data/Classes";
import Names from "../data/Names";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
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
  
export function createHireableHero() {
    const classLength = Classes.length;
    const classIndex = getRandomInt(classLength);
    const heroClass = Classes[classIndex];
    return {
        "name": setHeroName(heroClass),
        "icon": classIndex,
        "level": 1,
        "stats": {
            "hp": heroClass.stats.hp,
            "might": heroClass.stats.might,
            "magic": heroClass.stats.magic
        }
    }
}