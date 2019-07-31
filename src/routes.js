import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import Login from "./pages/login";
import Home from "./pages/home";
const AppNavigator = createStackNavigator({
  Login,
  Home
});

const DrawerNavigator = createDrawerNavigator({
  AppNavigator
});

const App = createAppContainer(DrawerNavigator);

export default App;
