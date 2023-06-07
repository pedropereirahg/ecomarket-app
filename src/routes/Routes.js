import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/auth/Splash";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import UpdatePasswordScreen from "../screens/profile/UpdatePasswordScreen";
import Tabs from "./tabs/Tabs";
import MyAccountScreen from "../screens/profile/MyAccountScreen";
import ProductDetailScreen from "../screens/user/ProductDetailScreen";
import CartScreen from "../screens/user/CartScreen";
import CheckoutScreen from "../screens/user/CheckoutScreen.js";
import OrderConfirmScreen from "../screens/user/OrderConfirmScreen";

// import MyOrderScreen from "../screens/user/MyOrderScreen";
// import MyOrderDetailScreen from "../screens/user/MyOrderDetailScreen";
// import CategoriesScreen from "../screens/user/CategoriesScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: true, title: "" }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgetpassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="updatepassword" component={UpdatePasswordScreen} />
        <Stack.Screen name="tab" component={Tabs} />
        <Stack.Screen name="myaccount" component={MyAccountScreen} />
        <Stack.Screen name="productdetail" component={ProductDetailScreen} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen name="orderconfirm" component={OrderConfirmScreen} />

        {/* <Stack.Screen name="myorder" component={MyOrderScreen} /> */}

        {/* <Stack.Screen name="myorderdetail" component={MyOrderDetailScreen} /> */}

        {/* <Stack.Screen
          name="vieworderdetails"
          component={ViewOrderDetailScreen}
        /> */}
        {/* <Stack.Screen name="categories" component={CategoriesScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
