import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      ); // action.mealId === action.payload in useContext
      const newFavoriteMeals = [...state.favoriteMeals];

      if (existingIndex >= 0) {
        newFavoriteMeals.splice(existingIndex, 1);
      } else {
        const mealToAdd = state.meals.find(meal => meal.id === action.mealId);
        newFavoriteMeals.push(mealToAdd);
      }

      return { ...state, favoriteMeals: newFavoriteMeals };
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const newFilteredMeals = state.meals.filter(meal => {
        if (
          (appliedFilters.glutenFree && !meal.isGlutenFree) ||
          (appliedFilters.lactoseFree && !meal.isLactoseFree) ||
          (appliedFilters.vegetarian && !meal.isVegetarian) ||
          (appliedFilters.vegan && !meal.isVegan)
        ) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: newFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
