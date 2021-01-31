import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
/* import AppLoading from "expo-app-loading"; */
/* import * as Font from "expo-font"; */
/* import { Ionicons } from "@expo/vector-icons"; */

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

/* const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
}; */

export default function App() {
  /*   const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  } */

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
