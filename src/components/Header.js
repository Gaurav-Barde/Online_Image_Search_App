import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ec4b6',
    padding: 20,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 22,
    letterSpacing: 0.5,
  },
});
export default Header;
