import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const ProductDetail = ({ navigation, route }) => {
  const selectedProduct = route.params.product;
  console.log(selectedProduct.id);

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image source={{ uri: selectedProduct.img }} style={styles.box1Image} />
        <View
          style={{
            position: "absolute",
            bottom: 15,
            right: 10,
            backgroundColor: "#f2f2f2",
            padding: 5,
            borderRadius: 100,
          }}
        >
          <Icon name="heart" size={40} color={"red"} />
        </View>
      </View>
      <View style={styles.box2}>
    
        <View style={{minHeight: '40%', display: 'flex', justifyContent: 'space-between',paddingHorizontal: 20 }}>
          <Text style={{fontSize: 14}}>#{selectedProduct.category}</Text>
          <Text style={{fontSize: 20}}>{selectedProduct.title}</Text>
          <Text style={{fontSize: 16}}>{selectedProduct.description}</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>{selectedProduct.price}</Text>
        </View>
        <View style={{height: 50, width: '100%', backgroundColor: 'green' }}>
          {/* <TouchableOpacity>
            <Text>Add to wishlist</Text>
          </TouchableOpacity> */}
          <TouchableOpacity >
            <Text style={{textAlign: 'center', marginTop: 5, color: '#fff', fontSize: 20}}>Chat on whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  box1: {
    height: "40%",
    // borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  box1Image: {
    width: 350,
    height: 280,
  },
  box2: {
    height: "60%",
    // borderWidth: 1,
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
