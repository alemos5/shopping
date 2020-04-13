import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Context } from "../context/BusinessContext";

const BusinessDetailScene = ({ route }) => {
    const { state } = useContext(Context);
    const { id } = route.params;
    const business = state.find(item => item.id === id);

    return (
        <>
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={{ uri: business.image_url }} />
                <Text style={styles.title}>{business.name}</Text>
                <Text>{business.category}</Text>
                <View style={styles.card}>
                    <Text>Teléfono: {business.phone}</Text>
                    <Text>Dirección: {business.address}</Text>
                    <Text>Horario: {business.schedule}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        marginTop: 15
    },
    image: {
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    title: {
        fontSize: 25
    },
    card: {
        marginTop: 15,
        paddingTop: 10,
        backgroundColor: '#F0EEEE',
        borderTopWidth: 1,
        borderTopColor: 'blue'
    }
});

export default BusinessDetailScene;