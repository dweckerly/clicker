import Quests from "../data/Quests";
import { getRandomInt } from "./util";

export function generateQuestList(amount) {
    let questLength = Quests.length;
    let questCopy = [...Quests];
    let questList = [];
    for(let i = 0; i < amount; i++) {
        if(questLength == 0) 
            return questList;
        let index = getRandomInt(questLength);
        questList.push(questCopy[index]);
        questCopy.splice(index, 1);
        questLength--;
    }
    return questList;
}