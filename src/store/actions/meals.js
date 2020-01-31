export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  mealId: id // === PAYLOAD
});

export const setFilters = filterSettings => ({
  type: SET_FILTERS,
  filters: filterSettings
});
