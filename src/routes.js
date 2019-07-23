import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./pages/login";
const RootStack = createStackNavigator({
  Login
});

const App = createAppContainer(RootStack);

export default App;
