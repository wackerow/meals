import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
});

export default DefaultText;
