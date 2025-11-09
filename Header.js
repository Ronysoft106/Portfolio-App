import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/eisha.jpg')} style={styles.image} />
      <Text style={styles.name}>Habibur Khan Rony</Text>
      <Text style={styles.role}>React Native Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
 image: {
  width: 180,        
  height: 180,        
  borderRadius: 90,   
  borderWidth: 3,     
  borderColor: 'white',
  marginBottom: 10,   
},
  name: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginTop: 15,
  },
  role: {
    fontSize: 22,
    color: '#aaa',
  },
});

export default Header;
