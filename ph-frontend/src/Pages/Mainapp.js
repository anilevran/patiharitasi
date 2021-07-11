import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export class Mainapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topDiv}></View>

        <View style={styles.mapContainer}></View>

        <View style={styles.bottomDiv}></View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#E0DDD9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topDiv: {
    width: "100%",
    height: windowHeight * 0.1,
    backgroundColor: "#07C775",
  },
  bottomDiv: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: windowHeight * 0.12,
    backgroundColor: "#07C775",
  },
  mapContainer: {
    width: "100%",
    height: windowHeight * 0.78,
  },
});
