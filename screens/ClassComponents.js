import React, { Component } from 'react';
import { View, Text } from 'react-native'

class ClassComponent extends Component {
    render() {
        return (
            <View>
                <Text>This is the footer , {this.props.name} </Text>
            </View>
        )
    }
}

export default ClassComponent