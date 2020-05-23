import React from 'react';
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/ProductContext";
import HomeScene from './src/scene/HomeScene';
import ItemDetailScene from './src/scene/ItemDetailScene';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import SettingScene from './src/scene/SettingScene';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainNavigation = ({ navigation }) => {

    const openNav = () => {
        navigation.openDrawer();
    };

    return (
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
                    title: 'Inicio',
                    headerLeft: () => (
                        <TouchableOpacity onPress={openNav}>
                            <Icon name="menu" size={24} color="white" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="ItemDetail" 
                component={ItemDetailScene}
                options={{
                    title: 'Producto'
                }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={MainNavigation} />
            <Drawer.Screen 
            name="Configuraciones" 
            component={SettingScene} 
            options={{
                title: 'Configuraciones'
            }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default () => {
    return <Provider><App /></Provider>
};
