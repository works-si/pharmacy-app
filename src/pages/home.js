import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import LogoHeader from "../images/logo-header.png";

class LogoTitle extends Component {
  render() {
    return (
      <View>
        <Image source={LogoHeader} />
      </View>
    );
  }
}

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#C41814"
      },
      headerTintColor: "#fff"
    };
  };

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({});
