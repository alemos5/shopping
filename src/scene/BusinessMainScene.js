import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessListScene from "./BusinessListScene";
import BusinessDetailScene from "./BusinessDetailScene";

const Stack = createStackNavigator();

const BusinessMainScene = () => {
    return (
        <Stack.Navigator
            initialRouteName="BusinessList"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'black' }
            }}
        >
            <Stack.Screen
                name="BusinessList" 
                component={BusinessListScene}
                options={{
                    title: 'Frishop'
                }}
            />
            <Stack.Screen
                name="BusinessDetail" 
                component={BusinessDetailScene}
                options={{
                    title: 'Comercio'
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default BusinessMainScene;