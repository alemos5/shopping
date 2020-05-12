import React, { useContext, useEffect } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/ProductContext";
import SearchBar from '../component/SearchBar';
import ListItem from '../component/ListItem';

const ListScene = ({ navigation }) => {
    const { state, getProducts} = useContext(Context);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <SearchBar/>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={state.list}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { id: item.id })}>
                            <ListItem item={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({});

export default ListScene;