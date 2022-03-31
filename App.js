import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeroHireList from './src/components/HeroHireList';

import { createHireableHero } from './src/hooks/useHireableHeros';

export default function App() {
  let heroData = []
  for(let i = 0; i < 10; i++) {
    heroData.push(createHireableHero());
  }
  return (
    <View style={styles.container}>
      <HeroHireList data={heroData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2e2e',
  }
});
