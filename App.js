import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Root from './components/Root'

export default function App() {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
