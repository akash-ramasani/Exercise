import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { View, Text, useColorScheme, Appearance, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    
    let colorScheme = Appearance.getColorScheme();
    console.log(colorScheme);

    return (
        <View style={styles.container}>
            <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} backgroundColor={colorScheme === 'light' ? 'white': 'black'}/>

            <View style={{flex: 0.1, backgroundColor: 'pink'}}>
                <Text>Expo Templates</Text>
            </View>

            <View style={{ flex: 0.9, backgroundColor: 'yellow' }}>
                <Text>Hai</Text>
            </View>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20,
    },
});