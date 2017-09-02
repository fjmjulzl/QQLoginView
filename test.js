import React, {Component} from 'react';
import {StyleSheet, View, Text, PickerIOS} from 'react-native';

class QQLoginView extends Component{
    render(){
        return(
            <View style = {TestStyles.container}>
                <Text style = {TestStyles.marginT}>{'this is a test file'}</Text>

            </View>
        )
    }
}

const TestStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    marginT: {
        marginTop: 50,
    }
})

export  default QQLoginView;

