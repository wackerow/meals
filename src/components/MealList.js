import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = ({ displayedMeals, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    const isFavoriteMeal = favoriteMeals.some(meal => meal.id === item.id);

    return (
      <MealItem
        title={item.title}
        onSelect={() => {
          navigation.navigate('MealDetail', {
            mealId: item.id,
            mealTitle: item.title,
            isFavorite: isFavoriteMeal
          });
        }}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%'
  }
});

export default MealList;
