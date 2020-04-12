import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default ({navigation }) => {
    return (
        <View style={styles.container}>
          <Image style={{
            height: 400,
            width: 400
          }} source={require('../../assets/iamrich.jpg')} />
          <Ionicons 
          onPress={() => navigation.push("iAmRich")}
          name="ios-information-circle" size={32} color="#fff" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    }
  });