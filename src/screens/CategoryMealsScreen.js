import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  // Select slice of STATE: .meals from rootReducer, .filteredMeals from meals reducer:
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const FallbackView = () => (
    <View style={styles.fallbackView}>
      <DefaultText style={styles.fallbackText}>No matches!</DefaultText>
      <DefaultText style={styles.fallbackText}>
        Try removing some filters!
      </DefaultText>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Ionicons name='ios-menu' size={100} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );

  // Check for empty array:
  return displayedMeals.length === 0 ? (
    <FallbackView />
  ) : (
    <MealList displayedMeals={displayedMeals} navigation={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return { headerTitle: selectedCategory.title };
};

const styles = StyleSheet.create({
  fallbackView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 30
  }
});

export default CategoryMealsScreen;
