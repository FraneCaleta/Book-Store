import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}  </Text>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amountText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity onPress={props.onRemove}>
            <Text style={styles.remove}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  remove: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    paddingRight: 2,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    width: "50%",
    justifyContent: "space-between"
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },
  amountText: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default CartItem;
