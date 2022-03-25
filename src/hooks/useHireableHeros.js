import Classes from "../data/Classes";
import Names from "../data/Names";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setHeroName(heroClass) {
    const maleNamesLength = Names.male.length;
    const femaleNamesLength = Names.female.length
    if(heroClass.gender === 'male') {
        if(heroClass.title.placement === 'suffix') {
            return Names.male[getRandomInt(maleNamesLength)] + heroClass.title.name;
        }
        else if (heroClass.title.placement === 'prefix') {
            return heroClass.title.name + Names.male[getRandomInt(maleNamesLength)];
        }
    }
    else if (heroClass.gender === 'female') {
        if(heroClass.title.placement === 'suffix') {
            return Names.female[getRandomInt(femaleNamesLength)] + heroClass.title.name;
        }
        else if (heroClass.title.placement === 'prefix') {
            return heroClass.title.name + Names.female[getRandomInt(femaleNamesLength)];
        }
    }
}

export default () => {
    const [result, setResult] = useState({
        data: null
    });
    const createHireableHeros = () => {
        const classLength = Classes.length;
        const classIndex = getRandomInt(classLength);
        const heroClass = Classes[classIndex];
        let name = setHeroName(heroClass);
        
    }
    return [result, createHireableHeros];
}