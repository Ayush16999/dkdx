import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthenticationScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View >
        <Image source={require('../assets/logo.jpg')} style={styles.box1} />
      </View>
      <View  style={styles.box2}>
        <Button title='Login'></Button>
        <Button title='Signup'></Button>
      </View>
    </View>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  box1: {
    width: 300,
    height: 300
  },
  box2: {
    width: '50%',
  },
})