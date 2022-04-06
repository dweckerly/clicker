export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

export function isHeroInList(hero, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == hero.id) {
            return true;
        }
    }
    return false;
}

export function sumOfRosterHeroes(roster) {
    let sum = 0;
    for (let i = 0; i < roster.length; i++) {
        sum += roster[i].cost
    }
    return sum;
}

export function sumActiveQuests(activeQuests) {
    let sum = 0;
    for (let i = 0; i < activeQuests.length; i++) {
        /* need to implement timeRemaining for activeQuests
        if(activeQuests.timeRemaining == 1) {
            sum += activeQuests[i].reward
        }
        */
        sum += activeQuests[i].reward
    }
    return sum;
}