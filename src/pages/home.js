import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
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
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: "#C41814"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={console.log(this.props.navigation)}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
