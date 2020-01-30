import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import FavoriteIcon from '../components/FavoriteIcon';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: 'Favorites'
      }
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

MealsNavigator.navigationOptions = {
  title: 'Meals',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name='ios-restaurant' color={tintColor} size={26} />
  )
};

const MealsFavoriteTabNavigator = createBottomTabNavigator(
  {
    Meals: MealsNavigator,
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-heart-empty' color={tintColor} size={26} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary, // 'dodgerblue',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(MealsFavoriteTabNavigator);
