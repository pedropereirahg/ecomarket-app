import { StyleSheet, Image, Text, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";

const OrderConfirmScreen = ({ navigation }) => {
  const [user, setUser] = useState({});

  //method to get authUser from async storage
  const getUserData = async () => {
    const value = await AsyncStorage.getItem("authUser");
    setUser(JSON.parse(value));
  };

  //fetch user data on initial render
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.imageContainer}>
        <Ionicons
          style={{ fontSize: 128, color: colors.primary }}
          name="checkmark-circle"
        />
      </View>
      <Text style={styles.secondaryText}>Your order was confirmed! :)</Text>
      <View>
        <CustomButton
          text={"Back to Home"}
          onPress={() => navigation.replace("tab", { user: user })}
        />
      </View>
    </View>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 400,
    height: 300,
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
