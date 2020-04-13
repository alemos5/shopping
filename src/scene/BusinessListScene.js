import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import SearchBar from "../component/SearchBar";
import { Context } from "../context/BusinessContext";
import BusinessItem from "../component/BusinessItem";

const BusinessListScene = ({ navigation }) => {
    const { state, getBusiness } = useContext(Context);

    useEffect(() => {
        getBusiness();
    }, []);

    return (
        <>
            <SearchBar />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={state}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BusinessDetail', { id: item.id })}>
                            <BusinessItem item={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default BusinessListScene;