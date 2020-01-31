import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Favorites',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabBarConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-restaurant' color={tintColor} size={26} />
      ),
      tabBarColor: Colors.primary, // Only works with 'shifting: true'
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans' }}>Meals</Text>
        ) : (
          'Meals'
        )
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-heart-empty' color={tintColor} size={26} />
      ),
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>
        ) : (
          'Favorites'
        )
    }
  }
};

const MealsFavoriteTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabBarConfig, {
        activeColor: Colors.secondary,
        inactiveColor: 'gray',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabBarConfig, {
        tabBarOptions: {
          labelStyle: { fontFamily: 'open-sans' },
          activeTintColor: Colors.secondary, // 'dodgerblue',
          inactiveTintColor: 'gray'
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavoriteTabNavigator,
      navigationOptions: { title: ' - Meals' }
    },
    FiltersStack: {
      screen: createStackNavigator(
        {
          Filters: {
            screen: FiltersScreen,
            navigationOptions: { headerTitle: 'Filter Options' }
          }
        },
        {
          // initialRouteName: 'Filters',
          defaultNavigationOptions: defaultStackNavOptions
        }
      ),
      navigationOptions: {
        title: ' - Filters'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: { fontFamily: 'open-sans-bold' }
    }
  }
);

export default createAppContainer(MainNavigator);
