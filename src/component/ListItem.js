import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ListItem = ({ item }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.image} source={{ uri: item.picture }}/>
            <View style={styles.textContainerStyle}>
                <Text>{item.name}</Text>
                <Text style={styles.subtitleStyle}>{item.store}</Text>
                <Text style={styles.priceStyle}>${item.offers}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    textContainerStyle:{
        backgroundColor: '#F0EEEE',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    image: {
        height: 180,
        width: 150,
        marginBottom: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    subtitleStyle: {
        fontSize: 9,
        color: 'gray'
    },
    priceStyle: {
        fontSize: 12
    }
});

export default ListItem;
