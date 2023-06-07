import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../constants";
import logo from "../../assets/logo/logo_white.png";

const Splash = ({ navigation }) => {
  //method to fetch the authUser data from aync storage if there is any and login the Dashboard or Home Screen according to the user type
  _retrieveData = async () => {
    try {
      await AsyncStorage.setItem(
        "authUser",
        JSON.stringify({
          userType: "USER",
          name: "John Doe",
          email: "john.doe@example.com",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        })
      );

      const value = await AsyncStorage.getItem("authUser");
      if (value !== null) {
        let user = JSON.parse(value); // covert the authUser value to json
        if (user.userType === "ADMIN") {
          setTimeout(() => {
            navigation.replace("dashboard", { authUser: JSON.parse(value) }); // navigate to Admin dashboard
          }, 2000);
        } else {
          setTimeout(() => {
            navigation.replace("tab", { user: JSON.parse(value) }); // navigate to User Home screen
          }, 2000);
        }
      } else {
        setTimeout(() => {
          navigation.replace("login"); // // navigate to login screen if there is no authUser store in aysnc storage
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check the authUser and navigate to screens accordingly on initial render
  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: colors.light,
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
});
