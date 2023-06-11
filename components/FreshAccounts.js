import { Image, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Button, Alert } from "react-native";
import React, { useContext } from "react";
import { userAuthContext } from "../utils/context/userAuthContext";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";

const FreshAccounts = () => {
  const { data, favourite, setFavourite } = useContext(userAuthContext);

  const navigation = useNavigation()

  function handleWishlist(itemID){
    if (favourite.some((prev) => prev.id === itemID.id)) {
        setFavourite((prevlist) => prevlist.filter((obj) => obj.id !== itemID.id))
        Toast.show("Item Removed from favourites")
    } else {
      setFavourite((prevlist) => [...prevlist, itemID])
      Toast.show("Item Added to favourites")
    }
  }

  // console.log(favourite)

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        data.map((item) => {
          return (
            <View style={styles.box} key={item.id}>
              <View style={styles.boxImg}>
                <Image source={{ uri: item.img }} style={styles.itemImage} />
                <View style={{position: 'absolute', bottom: 5, right: 0, backgroundColor: '#fff', padding: 5, borderRadius: 100}}>
                <TouchableOpacity onPress={() => handleWishlist(item)}>
                  {
                    favourite.some((prev) => prev.id === item.id) ? 
                    (
                <Icon  name="heart" size={25} color={'red'} />
                    )
                    : 
                    (
                <Icon  name="heart" size={25} color={'pink'} />
                    )
                  }
                </TouchableOpacity>
                </View>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.myText}>#{item.category}</Text>
                <Text style={{fontWeight: 'bold',}}>{item.title}</Text>
                <Text style={{fontWeight: 'bold',}}>##{item.brand}##</Text>
                <Text style={{fontWeight: 'bold', color: 'green', fontSize: 20, marginLeft: 10}}>{item.price}</Text>
                <TouchableOpacity style={{position: 'absolute', right: 10, bottom: 10,}}
                onPress={() => navigation.navigate('ProductDetails', {product: item }) }
                >
                  <Text style={{backgroundColor: '#333', color: 'white', paddingHorizontal: 15, paddingVertical: 8,  borderRadius: 5}}>Check details</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <Text>Checking All available accounts</Text>
          <ActivityIndicator color={"#000"} size={"large"} />
        </View>
      )}
    </View>
  );
};

export default FreshAccounts;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 150,
    marginTop: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    height: 100,
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    shadowOffset: {width: -200, height: -200},
    // elevation: 1
  },
  textBox:{
    width: '70%'
  },
  boxImg: {
    width: "30%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden'
  },
  itemImage: {
    width: 100,
    height: 80,
  },
  myText: {
    // width: "60%",
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    fontWeight: "400",
    fontSize: 12,
    // textAlign: 
  },
});
