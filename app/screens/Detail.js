
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
    return (
        <View style={styles.container}>
          <Text style={styles.txtStyle}>I am rich</Text>
          <Text style={styles.txtStyle}>I deserve it</Text>
          <Text style={styles.txtStyle}>healthy &</Text>
          <Text style={styles.txtStyle}>successful</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
    },
    txtStyle: {
      marginTop: 25,
        color: '#fff',
        fontSize: 80
    }
  });