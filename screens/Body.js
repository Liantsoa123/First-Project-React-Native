import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Body = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container} >
            <Text style={styles.text}>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} styles={styles.btn} />

        </View>
    )
}
export default Body; 