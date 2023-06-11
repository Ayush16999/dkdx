import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import Starting from "./screens/Starting";
import OtpVerification from "./screens/OtpVerification";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import { RootSiblingParent } from "react-native-root-siblings";
import Navbar from "./components/Navbar";
import MenuBtn from "./components/MenuBtn";
import Menu from "./components/Menu";
import { UserAuthContextProvider } from "./utils/context/userAuthContext";
import ProductDetail from "./screens/ProductDetail";
import WishlistScreen from "./screens/WishlistScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <UserAuthContextProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerBackVisible: false,
                title: "Home",
                headerStyle: { backgroundColor: "#222" },
                headerTintColor: "#fff",
                headerRight: () => <MenuBtn />,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MenuBtn"
              component={MenuBtn}
              options={{ headerBackVisible: false, title: "" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="Verification"
              component={OtpVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Introduction"
              component={Starting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentication"
              component={AuthenticationScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="WishlistScreen"
              component={WishlistScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetail}
              options={{ title: "ProductDetail" , headerTitleAlign: 'center', animation: 'fade_from_bottom' }}
            />
          </Stack.Navigator>
          {/* <Navbar /> */}
        </NavigationContainer>
      </RootSiblingParent>
    </UserAuthContextProvider>
  );
};

export default App;
