import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';

const mainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <mainStack.Navigator>
        <mainStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
      </mainStack.Navigator>      
    </NavigationContainer>
  );
}

export default App;