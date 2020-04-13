import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BusinessItem = ({ item }) => {
    return <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>Calificacion: {item.rating}</Text>
            <Text style={styles.info}>Opiniones: {item.comments}</Text>
        </View>
        <Image style={styles.image} source={{ uri: item.image_url }} />
    </View>
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#F0EEEE',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
        flex: 6
    },
    name: {
        fontWeight: 'bold'
    },
    info: {
        fontSize: 10,
        color: 'gray'
    }
});

export default BusinessItem;