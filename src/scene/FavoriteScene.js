import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const FavoriteScene = () => {
    return(
        <View
          style={styles.noFavoritesContainer}
        >
        <Icon
        style={styles.noFavoritesIcon}
        name="favorite"
        />
          <Text
            style={styles.noProductsText}
          >
            No tienes ningún sitio agregado a favoritos
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    noFavoritesContainer:{
        alignItems: "center",
        justifyContent:"center",
        flex:1
      },
      noFavoritesIcon:{
        fontSize:100,
        color:"#C8C8C8"
      },
      noProductsText:{
        textAlign: "center"
      }
});

export default FavoriteScene;
