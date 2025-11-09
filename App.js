import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;
