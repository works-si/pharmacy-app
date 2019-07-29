import React, { Component } from "react";
import BgLogin from "../images/bg-login.png";
import Logo from "../images/logo.png";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground source={BgLogin} style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <TextInput style={styles.inputEmail} placeholder="Email" />
        <TextInput style={styles.inputPassword} placeholder="Senha" />
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  inputEmail: {
    borderBottomWidth: 1,
    borderBottomColor: "#C41814",
    width: "60%",
    height: 40,
    backgroundColor: "white",
    padding: 10
  },
  inputPassword: {
    width: "60%",
    height: 40,
    backgroundColor: "white",
    padding: 10
  },
  button: {
    alignItems: "center",
    width: "60%",
    borderRadius: 0,
    marginTop: 30,
    padding: 15,
    backgroundColor: "#C41814"
  },
  buttonText: {
    color: "white",
    fontSize: 14
  }
});
