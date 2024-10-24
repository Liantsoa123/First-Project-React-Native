import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = ({name}) => {
    return (
        <View>
            <Text>Hello {name}, welcome to  MyComponent!</Text>
        </View>
    );
};


export default MyComponent;
