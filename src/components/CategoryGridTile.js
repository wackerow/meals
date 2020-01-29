import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = ({ color, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: -1 },
    shadowRadius: 2
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'right',
    textShadowColor: 'black',
    textShadowRadius: 5,
    padding: 5
  }
});

export default CategoryGridTile;
