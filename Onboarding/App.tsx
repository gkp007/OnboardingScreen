// App.tsx
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';

import Onboarding from './src/components/Onboarding';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
