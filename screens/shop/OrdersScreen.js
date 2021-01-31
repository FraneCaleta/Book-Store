import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      >
        <Text style={styles.displayText}>Menu</Text>
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
});

export default OrdersScreen;
