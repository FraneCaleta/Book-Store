import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";
/* import HeaderButton from "../../components/UI/HeaderButton"; */

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.navigate("Cart");
        }}
      >
        <Text style={styles.displayText}>Cart</Text>
      </TouchableOpacity>

      /*       <HeaderButton>
        <Button
          title="Cart"
          iconName={Platform.OS == "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButton> */
    ),
  };
};

const styles = StyleSheet.create({
  displayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    paddingRight: 20,
  },
});

export default ProductsOverviewScreen;
