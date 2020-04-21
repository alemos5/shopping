import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const CloseScene = () => {
    return(
        <View
          style={styles.noBeaconsContainer}
        >
        <Icon
        style={styles.noBeaconsIcon}
        name="bluetooth"
        />
          <Text
            style={styles.noBeaconsText}
          >
            Activá tu Bluetooth para recibir ofertas y promociones de negocios a tu alrededor
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    noBeaconsContainer:{
        alignItems: "center",
        justifyContent:"center",
        flex:1,
        paddingHorizontal:30
      },
      noBeaconsIcon:{
        fontSize:100,
        color:"#C8C8C8"
      },
      noBeaconsText:{
        textAlign: "center"
      }
});

export default CloseScene;
