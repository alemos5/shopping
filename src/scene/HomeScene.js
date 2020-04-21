import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScene from './ListScene';
import FavoriteScene from './FavoriteScene';
import CloseScene from './CloseScene';
import ReceivedScene from './ReceivedScene';
import ShoppingScene from './ShoppingScene';
import { MaterialIcons as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScene = () => {
    return (
        <Tab.Navigator
            initialRouteName="List"
            tabBarOptions={{
                style: {
                    color: 'white',
                    backgroundColor: '#dd3333',
                    paddingTop: 12,
                    paddingBottom: 16,
                    height: 75
                },
                activeTintColor: 'white',
                inactiveTintColor: '#C89B7B',
                labelStyle: {
                    fontSize: 12
                }
            }}
        >
            <Tab.Screen 
                name="List" 
                component={ListScene}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="home" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Favorite" 
                component={FavoriteScene}
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="favorite" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Close" 
                component={CloseScene}
                options={{
                    title: 'Cerca',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="location-on" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Received" 
                component={ReceivedScene}
                options={{
                    title: 'Recibidos',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="notifications" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Shopping" 
                component={ShoppingScene}
                options={{
                    title: 'Compras',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="shopping-cart" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeScene;
