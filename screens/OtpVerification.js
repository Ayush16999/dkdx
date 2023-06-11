import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-root-toast";

const OtpVerification = ({ route, navigation }) => {
  const [number, onChangeNumber] = useState("");
  const [error, onError] = useState(false);

  const { userPhoneNumber } = route.params;

  function handleSubmit() {
    if (number === "" || parseInt(number) !== Number(number)) {
      onError(true);
      Alert.alert("Please enter a OTP to continue");
      onChangeNumber("")
    } else {
      onChangeNumber("")
        navigation.navigate('Home')
        Toast.show("Login Successfully")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.box1Image}
        />
        <Text style={styles.box1Text}>
          A 4 digit verification 
          code was sent to {userPhoneNumber}{" "}
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.box2Text}>Enter the OTP below</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="number-pad"
          maxLength={4}
          autoComplete="tel"
          textAlign="center"
        />
        {
          error && <Text style={{color: 'red'}}>please enter a valid number</Text>
        }
        <View style={styles.box2BTN}>
          <Button
            title="Verify Otp"
            color={"#000"}
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box1Text: {
    fontSize: 16,
    fontWeight: "500",
  },
  box1Image: {
    width: 200,
    height: 200,
  },
  box2Text: {
    marginBottom: 5,
    color: "gray",
  },
  input: {
    height: 60,
    width: 200,
    marginBottom: 20,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 26,
    letterSpacing: 20,
    textAlign: "justify",
    fontWeight: 'bold',
    backgroundColor: '#999'
  },
  box2BTN: {
    width: 120,
  },
});
