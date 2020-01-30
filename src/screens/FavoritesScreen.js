import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const FavoritesScreen = ({ navigation }) => {
  // pull list of user favorites
  const userFavorites = []; // list of mealIds

  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        onSelect={() => {
          navigation.navigate('MealDetail', {
            mealId: item.id
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
        keyExtractor={item => item}
        data={userFavorites}
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
  flexList: {
    width: '100%'
  }
});

export default FavoritesScreen;
