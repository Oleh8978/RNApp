import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Splash extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Image
          style={styles.loading}
          source={require("./../../imgs/gomer.jpg")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "white"
  },
  loading: {
    marginTop: "40%",
    marginLeft: "45%",
    width: 60,
    height: 120
  }
});

export default Splash;
