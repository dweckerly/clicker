import { StyleSheet, Text, View, Image } from 'react-native';
import HeroItem from './src/components/HeroItem';

export default function App() {
  return (
    <View style={styles.container}>
      <HeroItem icon={'dwarf'} />
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
