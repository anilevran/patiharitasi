import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";
import { Overlay } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker, Callout } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLocationArrow,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function MainApp(props) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topDiv}></View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 41.004367,
            longitude: 28.658555,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Marker 1 */}
          <Marker
            draggable
            coordinate={{
              latitude: 41.004367,
              longitude: 28.658555,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onDragEnd={(e) =>
              this.setState({ coordinate: e.nativeEvent.coordinate })
            }
            //onPress={() => props.navigation.navigate("Home")}
            onPress={toggleOverlay}
            style={styles.marker}
          >
            <View style={styles.bowlContainer}>
              <Image
                source={require("../../assets/bowlicon2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={styles.arrow}>
              <FontAwesomeIcon
                icon={faLocationArrow}
                color={"green"}
                style={{
                  // Size
                  width: 30,
                  height: 30,
                  transform: [{ rotateY: "180deg" }, { rotateZ: "120deg" }],
                }}
              />
            </View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <View style={styles.overlayStyle}>
                <View style={styles.overlayClose}>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    // color={"green"}
                    size={50}
                  />
                </View>
              </View>
            </Overlay>
          </Marker>

          {/* Marker 2 */}
          <Marker
            draggable
            coordinate={{
              latitude: 40.981567,
              longitude: 28.66747,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onDragEnd={(e) =>
              this.setState({ coordinate: e.nativeEvent.coordinate })
            }
            onPress={() => props.navigation.navigate("Home")}
            style={styles.marker}
          >
            <View style={styles.bowlContainer}>
              <Image
                source={require("../../assets/bowlicon2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={styles.arrow}>
              <FontAwesomeIcon
                icon={faLocationArrow}
                color={"red"}
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotateY: "180deg" }, { rotateZ: "120deg" }],
                }}
              />
            </View>
          </Marker>

          {/* Marker 3 */}
          <Marker
            draggable
            coordinate={{
              latitude: 41.000869,
              longitude: 28.627987,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onDragEnd={(e) =>
              this.setState({ coordinate: e.nativeEvent.coordinate })
            }
            onPress={() => props.navigation.navigate("Home")}
            style={styles.marker}
          >
            <View style={styles.bowlContainer}>
              <Image
                source={require("../../assets/bowlicon2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={styles.arrow}>
              <FontAwesomeIcon
                icon={faLocationArrow}
                color={"yellow"}
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotateY: "180deg" }, { rotateZ: "120deg" }],
                }}
              />
            </View>
          </Marker>
        </MapView>
      </View>

      <View style={styles.bottomDiv}></View>
      <StatusBar style="auto" />
    </View>
  );
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
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    height: 50,
    width: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bowlContainer: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },

  arrow: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },

  overlayStyle: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  overlayClose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
