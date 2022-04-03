import { View } from "react-native";
import RosterList from "../RosterList";
import { background } from "../../../shared/styles";

export default HeroRosterScreen = () => {
    return (
        <View style={background}>
            <RosterList></RosterList>
        </View>
    );
}