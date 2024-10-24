import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './screens/Welcome';
import ClassComponents from './screens/ClassComponents';
import Body from './screens/Body';

export default function App() {


  return (
    <View style={styles.container} >
      <Welcome name={'Liantsoa'} />
      <Body />
      <ClassComponents name="Fanantenana" />
    </View>
  );

}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  }
});


