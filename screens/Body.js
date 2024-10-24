import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Body = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} styles={styles.btn} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});