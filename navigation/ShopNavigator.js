import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackTitleStyle: {
        fontWeight: "bold",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
