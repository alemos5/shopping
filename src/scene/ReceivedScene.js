import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const ReceivedScene = () => {
    return(
        <View
          style={styles.noPNContainer}
        >
        <Icon
        style={styles.noPNIcon}
        name="notifications"
        />
          <Text
            style={styles.noPNText}
          >
            No tienes ninguna oferta recibida, asegurate de tener el Bluetooth encendido
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    noPNContainer:{
        alignItems: "center",
        paddingHorizontal:10,
        justifyContent:"center",
        flex:1
      },
      noPNIcon:{
        fontSize:100,
        color:"#C8C8C8"
      },
      noPNText:{
        textAlign: "center"
      }
});

export default ReceivedScene;
