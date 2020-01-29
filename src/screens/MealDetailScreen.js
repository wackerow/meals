import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import FavoriteIcon from '../components/FavoriteIcon';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'; // --plural--

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <View style={styles.imageView}>
        <ImageBackground source={{ uri: meal.imageUrl }} style={styles.image} />
      </View>
      <ScrollView style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text>Ingredients:</Text>
          {meal.ingredients.map(item => (
            <Text> • {item}</Text>
          ))}
        </View>
        <View style={{ padding: 10 }}>
          <Text>Steps to perfection:</Text>
          {meal.steps.map(item => (
            <Text> • {item}</Text>
          ))}
        </View>
        {meal.isGlutenFree ? <Text>Gluten Free</Text> : null}
        {meal.isLactoseFree ? <Text>Lactose Free</Text> : null}
        {meal.isVegetarian && !meal.isVegan ? <Text>Vegetarian</Text> : null}
        {meal.isVegan ? <Text>Vegan</Text> : null}
        <Text>Est. time: {meal.duration} min</Text>
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={FavoriteIcon}>
        <Item
          title='Fav'
          iconName='ios-heart'
          onPress={() => {
            console.log('mark as favorite');
          }}
        />
      </HeaderButtons>
    )
    // headerRight: () => {
    //   return <FavoriteIcon onPress={() => {}} />;
    // }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  imageView: {
    height: 200
  },
  image: {
    width: '100%',
    height: '100%'
  },
  container: {}
});

export default MealDetailScreen;
