import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});