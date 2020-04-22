import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/ProductContext";
import HomeScene from './src/scene/HomeScene';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#dd3333'
                }
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScene}
                options={{
                    title: 'Inicio'
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default () => {
    return <Provider><App /></Provider>
};
