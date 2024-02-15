import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { Appearance } from 'react-native'

const HomeScreen = () => {
    
    let colorScheme = Appearance.getColorScheme();

    return (
        <StatusBar style={colorScheme === 'light' ? 'auto' : 'light'} backgroundColor={colorScheme === 'light' ? 'white': 'black'} animated={true} />
    )
};

export default HomeScreen;