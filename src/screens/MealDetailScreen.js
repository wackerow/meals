import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; // --plural--
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = navigation.getParam('mealId');
  const isFavoriteMeal = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const meal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFavorite: isFavoriteMeal });
  }, [isFavoriteMeal]);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.quickDetails}>
          <DefaultText style={styles.quickDetailsText}>
            {meal.duration} min
          </DefaultText>
          <DefaultText style={styles.quickDetailsText}>
            {meal.complexity.toUpperCase()}
          </DefaultText>
          <DefaultText style={styles.quickDetailsText}>
            {meal.affordability.toUpperCase()}
          </DefaultText>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>Ingredients</Text>
          {meal.ingredients.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>Steps to perfection</Text>
          {meal.steps.map((item, index) => (
            <ListItem key={item}>
              Step {index + 1}: {item}
            </ListItem>
          ))}
        </View>
        <View style={styles.bottomIcons}>
          {meal.isGlutenFree ? (
            <Image
              source={require('../../assets/glutenFree.png')}
              style={{ width: 50, height: 50 }}
            />
          ) : null}
          {meal.isLactoseFree ? (
            <Image
              source={require('../../assets/lactoseFree.png')}
              style={{ width: 50, height: 50 }}
            />
          ) : null}
          {meal.isVegetarian && !meal.isVegan ? (
            <Image
              source={require('../../assets/vegetarian.png')}
              style={{ width: 50, height: 50 }}
            />
          ) : null}
          {meal.isVegan ? (
            <Image
              source={require('../../assets/vegan.png')}
              style={{ width: 50, height: 50 }}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
  const isFavorite = navigationData.navigation.getParam('isFavorite');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Fav'
          iconName={isFavorite ? 'ios-heart' : 'ios-heart-empty'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  image: {
    width: '100%',
    height: 200
  },
  quickDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    backgroundColor: Colors.secondary + '33'
  },
  quickDetailsText: {
    color: Colors.primary
  },
  scrollContainer: {
    width: '100%'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 12,
    padding: 10,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 5
  },
  bottomIcons: {
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default MealDetailScreen;
