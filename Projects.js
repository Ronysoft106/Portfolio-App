import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const projects = [
  { name: 'Todo App', description: 'Task management app using React Native.' },
  { name: 'Counter App', description: 'A simple app that increases or decreases a number with a button press.' },
  { name: 'Calculator App', description: 'A simple calculator app that performs addition, subtraction, multiplication, and division.' },
];

const Projects = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Projects</Text>
    {projects.map((p, i) => (
      <View key={i} style={styles.project}>
        <Text style={styles.name}>{p.name}</Text>
        <Text style={styles.desc}>{p.description}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  project: { marginBottom: 15 },
  name: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  desc: { color: '#bbb' },
});

export default Projects;
