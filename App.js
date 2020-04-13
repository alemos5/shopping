import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BusinessMainScene from "./src/scene/BusinessMainScene";
import BusinessNearbyScene from "./src/scene/BusinessNearbyScene";
import BusinessFavoriteScene from "./src/scene/BusinessFavoriteScene";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "./src/context/BusinessContext";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="BusinessList"
            tabBarOptions={{
                style: {
                    color: 'white',
                    backgroundColor: 'black',
                    paddingTop: 5
                },
                activeTintColor: 'white',
                labelStyle: {
                    fontSize: 12,
                    paddingBottom: 5
                }
            }}
        >
          <Tab.Screen
              name="BusinessMain"
              component={BusinessMainScene}
              options={{
                  title: 'Inicio',
                  tabBarIcon: ({ focused, color, size }) => {
                      return <Ionicons name="md-home" color={color} size={size} />
                  }
              }}
          />
        <Tab.Screen
            name="BusinessNearby"
            component={BusinessNearbyScene}
            options={{
                title: 'Cerca',
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="ios-link" color={color} size={size} />
                }
            }}
        />
        <Tab.Screen
            name="BusinessFavorite"
            component={BusinessFavoriteScene}
            options={{
                title: 'Favoritos',
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="md-heart" color={color} size={size} />
                }
            }}
        />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default () => {
    return <Provider><App /></Provider>
};
