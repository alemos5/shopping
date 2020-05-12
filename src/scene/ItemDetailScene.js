import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { Context } from '../context/ProductContext';
import StarRating from 'react-native-star-rating';
import { MaterialIcons as Icon } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import ListItem from '../component/ListItem';
import { ScrollView } from 'react-native-gesture-handler';

const ItemDetailScene = ({ route, navigation }) => {
    const { id } = route.params;
    const { state, getProductsBySeller } = useContext(Context);
    const product = state.list.find(item => item.id === id );

    useEffect(() => {
        getProductsBySeller();
    }, []);

    return (
        <SafeAreaView style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: product.picture }} />
            <View style={styles.headerSTyle}>

                <View style={{ flex: 4, marginRight: 10 }}>

                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={product.rating}
                        starSize={22}
                    />
                </View>
                <Icon style={{ flex: 3 }} name="favorite-border" color="red" size={22} />
                <Icon style={{ flex: 3 }} name="shopping-cart" color="red" size={22} />
            </View>
            <Text>{product.categoria}</Text>
            <Text>{product.title}</Text>
            <Text>{product.oferta}</Text>
            <Text>Descripción</Text>
            <Text>{product.descripcion}</Text>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: parseFloat(product.latitud),
                        longitude: parseFloat(product.longitud),
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                      }}
                />
            </View>
            <Text>Dirección: {product.direccion}</Text>
            <Text>Teléfono: {product.tlf_movil}</Text>
            <Text>Horarios: </Text>
            <Text>Más ofertas del vendedor</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                scrollToOverflowEnabled={true}
                numColumns={2}
                data={state.listBySeller}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { id: item.id })}>
                            <ListItem item={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    headerSTyle: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: "center"
    },
    imageStyle: {
        height: 180
    },
    mapContainer: {
        width: null
    },
    mapStyle: {
        width: null,
        height: 150,
    }
});

export default ItemDetailScene;
