import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./pages/login";
import Home from "./pages/home";
const RootStack = createStackNavigator({
  Login,
  Home
});

const App = createAppContainer(RootStack);

export default App;
