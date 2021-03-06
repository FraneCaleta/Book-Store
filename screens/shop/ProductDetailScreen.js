import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.navigate("Cart");
        }}
      >
        <Text style={styles.displayText}>Cart</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  displayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Platform.OS === "android" ? "white" : Colors.primary,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
