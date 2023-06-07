import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cartproduct = useSelector((state) => state.product);
  const navigation = useNavigation();

  const productsQuantity = cartproduct.length;
  return (
    <TouchableOpacity
      style={styles.cartIconContainer}
      onPress={() => navigation.navigate("cart")}
    >
      {productsQuantity > 0 ? (
        <View style={styles.cartItemCountContainer}>
          <Text style={styles.cartItemCountText}>{productsQuantity}</Text>
        </View>
      ) : (
        <></>
      )}
      <Ionicons name="cart-outline" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItemCountContainer: {
    position: "absolute",
    zIndex: 10,
    top: -10,
    left: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 22,
    width: 22,
    backgroundColor: colors.danger,
    borderRadius: 11,
  },
  cartItemCountText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 10,
  },
});
