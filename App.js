import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './src/store/reducers/meals';
import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

// Helps merge potentially multiple reducers
const rootReducer = combineReducers({
  meals: mealsReducer
});

// Create a Redux store using reducers passed in
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = props => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
