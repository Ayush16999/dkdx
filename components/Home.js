import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Services from './Services';
import Recommendation from './Recommendation';
import FreshAccounts from './FreshAccounts';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ServiceContainer}>
        <Text style={styles.bigText}>We Provide Following Accounts</Text>
        <View>
          <Services />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.AccText}>All Available Accounts</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FreshAccounts />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  ServiceContainer: {
    // marginTop: 10,
    minHeight: '25%',
    display: 'flex',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  container: {
    // marginTop: 20,
    height: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 20,
    // textDecorationLine: 'underline',
  },
  AccText: {
    fontSize: 22,
    // color: 'green',
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textDecorationLine: 'underline',
  },
});
