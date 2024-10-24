import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './screens/Welcome';
import ClassComponents from './screens/ClassComponents';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View>
      <Welcome name={'Liantsoa'} />
      <ClassComponents name="Fanantenana" />
    </View>
  );

}


