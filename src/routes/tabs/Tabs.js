import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../constants";
import HomeScreen from "../../screens/user/HomeScreen";
import UserProfileScreen from "../../screens/profile/UserProfileScreen";
import MyOrderScreen from "../../screens/user/MyOrderScreen";
import CategoriesScreen from "../../screens/user/CategoriesScreen";

const Tab = createBottomTabNavigator();

const Tabs = ({ route }) => {
  const { user } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,

        tabBarIcon: ({ focused }) => {
          let routename = route.name;
          let icon;
          if (routename === "home") {
            icon = "home-outline";
          } else if (routename === "categories") {
            icon = "apps-outline";
          } else if (routename === "myorder") {
            icon = "cart-outline";
          } else if (routename === "user") {
            icon = "person-outline";
          }

          return (
            <TouchableOpacity disabled>
              <Ionicons
                name={icon}
                size={28}
                color={focused ? colors.primary : colors.muted}
              />
            </TouchableOpacity>
          );
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white,
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        initialParams={{ user: user }}
        tabBarOptions={{
          style: {
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name="categories"
        component={CategoriesScreen}
        initialParams={{ user: user }}
        tabBarOptions={{
          tabBarHideOnKeyboard: true,
          style: {
            position: "absolute",
          },
        }}
      />
      {
        <Tab.Screen
          name="myorder"
          component={MyOrderScreen}
          initialParams={{ user: user }}
        />
      }
      <Tab.Screen
        name="user"
        component={UserProfileScreen}
        initialParams={{ user: user }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
