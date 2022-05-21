/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/*Todo */}
      <View style={styles.wrapper}>
        <Text style={styles.title}>Todo App</Text>

        <View>{/* Todo */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
