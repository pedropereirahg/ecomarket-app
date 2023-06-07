import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ProgressDialog from "react-native-progress-dialog";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../constants";
import CustomInput from "../../components/CustomInput";
import header_logo from "../../assets/logo/logo.png";
import CustomButton from "../../components/CustomButton";
import CustomAlert from "../../components/CustomAlert/CustomAlert";

import user from "../../data/user";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  //method to store the authUser to aync storage
  _storeData = async (user) => {
    try {
      AsyncStorage.setItem("authUser", JSON.stringify(user));
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //method to validate the user credentials and navigate to Home Screen / Dashboard
  const loginHandle = async () => {
    setIsloading(true);

    await AsyncStorage.setItem("authUser", JSON.stringify(user)); // navigate to User Home screen

    setIsloading(false);

    navigation.replace("tab", { user });
  };

  return (
    <InternetConnectionAlert onChange={(connectionState) => {}}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <ProgressDialog visible={isloading} label={"Login ..."} />
          <StatusBar></StatusBar>
          <View style={styles.welconeContainer}>
            <View>
              <Text style={styles.welcomeText}>Welcome to EcoMarket</Text>
              <Text style={styles.welcomeParagraph}>
                Where Economical Meets Ecological!
              </Text>
            </View>
            <View>
              <Image style={styles.logo} source={header_logo} />
            </View>
          </View>
          <View style={styles.screenNameContainer}>
            <Text style={styles.screenNameText}>Login</Text>
          </View>
          <View style={styles.formContainer}>
            <CustomAlert message={error} type={"error"} />
            <CustomInput
              value={email}
              setValue={setEmail}
              placeholder={"Username"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
            <CustomInput
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              placeholder={"Password"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
            <View style={styles.forgetPasswordContainer}>
              <Text
                onPress={() => navigation.navigate("forgetpassword")}
                style={styles.ForgetText}
              >
                Forget Password?
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttomContainer}>
          <CustomButton text={"Login"} onPress={loginHandle} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Don't have an account?</Text>
          <Text
            onPress={() => navigation.navigate("signup")}
            style={styles.signupText}
          >
            signup
          </Text>
        </View>
      </KeyboardAvoidingView>
    </InternetConnectionAlert>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  welconeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
  },
  formContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    width: "100%",
    flexDirecion: "row",
    padding: 5,
  },
  logo: {
    resizeMode: "contain",
    width: 80,
  },
  welcomeText: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.muted,
  },
  welcomeParagraph: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.primary_shadow,
  },
  forgetPasswordContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ForgetText: {
    fontSize: 15,
    fontWeight: "600",
  },
  buttomContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  bottomContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    marginLeft: 2,
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  screenNameContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.muted,
  },
});
