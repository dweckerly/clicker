import { StyleSheet, Text, View, Image } from 'react-native';
import HeroItem from './src/components/HeroItem';

export default function App() {
  hero = {
    "id": 2,
    "icon": 5,
    "name": "Guy the BAMF",
    "level": 1,
    "stats": {
      "hp": 5,
      "might": 5,
      "magic": 5
    }
  }
  return (
    <View style={styles.container}>
      <HeroItem hero={hero} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
