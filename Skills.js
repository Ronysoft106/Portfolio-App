import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const skills = ['React Native', 'JavaScript', 'Redux', 'Firebase', 'REST APIs'];

const Skills = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Skills</Text>
    {skills.map((skill, index) => (
      <Text key={index} style={styles.skill}>• {skill}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  skill: { color: '#ccc', fontSize: 16, marginVertical: 2 },
});

export default Skills;
