import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export function Signin(props) {
  var [email, setEmail] = useState("anil.evran7@gmail.com");
  var [password, setPassword] = useState("1026");

  var handleLogin = () => {
    console.log("handle");
    axios
      .post("http://192.168.1.36:12000/sign-in", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.length == 0) {
          Alert.alert("Hata", "Kullanıcı adı veya Şifre Yanlış", [
            {
              text: "Tamam",
              //onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]);
        } else {
          console.log(`${result.data[0].username} başarıyla giriş yaptı`);
          props.navigation.navigate("MainApp");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Giriş yaparken hata oluştu");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.appTitle}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.iconStyle}
            source={require("../../assets/patiharitasiIcon.jpg")}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formLine}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="anil.evran7@gmail.com"
              onChangeText={(text) => setEmail(text)}
            >
              {email}
            </TextInput>
          </View>
        </View>
        <View style={styles.formLine}>
          <Text style={styles.label}>Şifre</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="* * * * * * * *"
              onChangeText={(text) => setPassword(text)}
            >
              {password}
            </TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight underlayColor="none" onPress={handleLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: 300,
    height: 450,
    display: "flex",
    flexDirection: "column",
  },
  formLine: {
    width: "100%",
    height: "15%",
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    color: "#6A6565",
  },
  label: {
    color: "#00C868",
    fontSize: 18,
  },
  inputContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#E5E4E1",
    borderBottomWidth: 4,
    borderColor: "#61D6A1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#E0DDD9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  appTitle: {
    width: 300,
    height: 200,
    padding: 10,
    marginTop: 75,
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 10,
  },
  iconStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    height: "40%",
  },
  button: {
    width: "100%",
    height: "50%",
    backgroundColor: "#BEAAAA",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },
  buttonText: {
    // fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#FFF",
  },
});
