import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const MealItem = ({
  title,
  onSelect,
  duration,
  complexity,
  affordability,
  image
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetail]}>
            <DefaultText>{duration} min</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    // width: '90%',
    backgroundColor: Colors.secondary + '33',
    borderRadius: 15,
    overflow: 'hidden',
    margin: 15
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    textShadowColor: 'black',
    textShadowRadius: 5,
    padding: 5,
    textAlign: 'center'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default MealItem;
