import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Contact = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Contact</Text>
    <TouchableOpacity onPress={() => Linking.openURL('mailto:john@example.com')}>
      <Text style={styles.link}>📧 habiburkhanrony3@gmail.com</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Ronysoft106')}>
      <Text style={styles.link}>💻 GitHub</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/Ronyrazz')}>
      <Text style={styles.link}>🔗 LinkedIn</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  link: { color: '#1e90ff', fontSize: 16, marginVertical: 5 },
});

export default Contact;
