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
        <TextInput
          style={styles.inputPassword}
          secureTextEntry={true}
          placeholder="Senha"
        />
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={e => {
            e.stopPropagation();
            this.props.navigation.navigate("Home");
          }}
        >
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
    width: "70%",
    height: 40,
    backgroundColor: "white",
    padding: 10
  },
  inputPassword: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
    padding: 10
  },
  forgotPassword: {
    fontSize: 12,
    marginTop: 10
  },
  button: {
    alignItems: "center",
    width: "70%",
    borderRadius: 0,
    marginTop: 40,
    padding: 15,
    backgroundColor: "#C41814"
  },
  buttonText: {
    color: "white",
    fontSize: 14
  }
});
