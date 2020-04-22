import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ListItem = ({ item }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.image} source={{ uri: item.picture }}/>
            <View style={styles.textContainerStyle}>
                <Text>{item.name}</Text>
                <Text style={styles.subtitleStyle}>{item.store}</Text>
                <Text style={styles.priceStyle}>${item.price}</Text>
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
        backgroundColor: '#F0EEEE'
    },
    image: {
        height: 180,
        width: 150,
        borderRadius: 4,
        marginBottom: 5
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
