import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { userAuthContext } from "../utils/context/userAuthContext";
import Toast from "react-native-root-toast";

const LoginPage = ({ navigation }) => {
  const { login, googleSignIn, passwordReset, user, } =
    useContext(userAuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit() {
    console.log("user created");
  }

  async function googleSignInHandler() {
    try {
      await googleSignIn();
      Toast.success("you have successfully logged in");
      navigation.navigate("Home");
    } catch (errors) {
      console.log(errors)
    }
  }

  console.log(user)

  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.box1Image}
        />
        <Text style={styles.box1Text}>Welcome! Login to continue</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
        />
        <TouchableOpacity style={{ width: "70%" }}>
          <Text style={{ fontWeight: "600" }}>forgot password?</Text>
        </TouchableOpacity>
        {error && (
          <Text style={{ color: "red", margin: 5 }}>
            please enter a valid number
          </Text>
        )}
        <View style={styles.box2BTN}>
          <Button
            title="Login"
            color={"#000"}
            button
            onPress={() => handleSubmit()}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text>
            Don't have an account ? Please
            <Text
              onPress={() => console.log("pressed")}
              style={{
                fontWeight: "bold",
                textDecorationLine: "underline",
                paddingHorizontal: 5,
              }}
            >
              {" "}
              SignUp{" "}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            height: 3,
            borderWidth: 1,
            borderColor: "#dddd",
            marginTop: 20,
          }}
        ></View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={() => googleSignInHandler()}>
            <Image
              source={require("../assets/google-signin-button.png")}
              style={{ height: 60, width: 250, borderRadius: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-evenly",
  },
  box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box1Text: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
    color: "#000",
  },
  box1Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  box2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 10,
    borderColor: "#000",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
  },
  box2BTN: {
    width: 150,
    marginTop: 20,
  },
});
