import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    height: 80,
    paddingTop: 38,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
