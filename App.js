import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './screens/Welcome';
import ClassComponents from './screens/ClassComponents';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} styles={styles.btn} />
      <Welcome name={'Liantsoa'} />
      <ClassComponents name="Fanantenana" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {

  }
});
