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
import Menu from "../images/menu.png";

class LogoTitle extends Component {
  render() {
    return (
      <View>
        <Image source={LogoHeader} />
      </View>
    );
  }
}

export default class Home extends Component {
  state = {
    medicines: [
      {
        title: "bla",
        hour: "12/12"
      },
      {
        title: "bla",
        hour: "12/12"
      },
      {
        title: "bla",
        hour: "12/12"
      }
    ]
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menu}
        >
          <Image source={Menu} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#C41814"
      },
      headerTintColor: "#fff"
    };
  };

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}> Meus medicamentos</Text>
        {this.state.medicines.map(() => {
          return (
            <View style={styles.contentList}>
              <TouchableOpacity style={styles.itemList}>
                <Text style={styles.titleList}>Furosemida 50mg</Text>
                <Text>12/12 hrs</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    paddingLeft: 20
  },
  content: {
    backgroundColor: "#e5e5e5",
    height: 1000
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 15,
    color: "#585858",
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 20
  },
  contentList: {
    alignItems: "center",
    marginBottom: 15
  },
  itemList: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  titleList: {
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(37, 37, 37, 0.87)"
  },
  subtitleList: {
    fontSize: 12,
    letterSpacing: 10,
    lineHeight: 20,
    color: "rgba(0, 0, 0, 0.5438)"
  }
});
