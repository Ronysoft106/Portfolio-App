import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => (
  <View style={styles.container}>
    <Text style={styles.title}>About Me</Text>
    <Text style={styles.text}>
     I’m a passionate React Native developer eager to start my professional journey. 
    <br/>I love building mobile applications and continuously learning new technologies.<br/>
     I’ve created several personal projects to strengthen my skills in React Native, 
     JavaScript, and mobile UI design.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  text: { color: '#ccc', fontSize: 16, lineHeight: 22 },
});

export default About;
