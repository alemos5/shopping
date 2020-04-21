import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const ShoppingScene = () => {
    return (
        <View
          style={styles.noShopContainer}
          >
          <Icon
            style={styles.noShopIcon}
            name="shopping-cart"
            />
          <Text
            style={styles.noShopText}
            >
            Aún no has realizado una compra
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    noShopContainer:{
        alignItems: "center",
        justifyContent:"center",
        flex:1
      },
      noShopIcon:{
        fontSize:100,
        color:"#C8C8C8"
      },
      noShopText:{
        textAlign: "center"
      }
});

export default ShoppingScene;
