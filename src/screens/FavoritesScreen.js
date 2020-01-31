import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const FavoritesScreen = ({ navigation }) => {
  // Select slice of STATE: .meals from rootReducer, .favoriteMeals from meals reducer:
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const FallbackView = () => (
    <View style={styles.fallbackView}>
      <DefaultText style={styles.fallbackText}>
        Try adding some favorites by tapping the heart icon!
      </DefaultText>
      <Ionicons name='ios-heart-empty' size={150} color={Colors.primary} />
    </View>
  );

  return !favoriteMeals || favoriteMeals.length === 0 ? (
    <FallbackView />
  ) : (
    <MealList displayedMeals={favoriteMeals} navigation={navigation} />
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={navData.navigation.toggleDrawer}
        />
      </HeaderButtons>
    )
  };
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

export default FavoritesScreen;
