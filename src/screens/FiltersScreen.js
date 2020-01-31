import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = ({ label, switchState, setSwitchState }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <Switch
        value={switchState}
        onValueChange={setSwitchState}
        trackColor={{ true: Colors.primary }}
        thumbColor={'white'}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label={'Gluten-free'}
        switchState={isGlutenFree}
        setSwitchState={setIsGlutenFree}
      />
      <FilterSwitch
        label={'Lactose-free'}
        switchState={isLactoseFree}
        setSwitchState={setIsLactoseFree}
      />
      <FilterSwitch
        label={'Vegetarian'}
        switchState={isVegetarian}
        setSwitchState={setIsVegetarian}
      />
      <FilterSwitch
        label={'Vegan'}
        switchState={isVegan}
        setSwitchState={setIsVegan}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={navData.navigation.toggleDrawer}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 15,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelText: {
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default FiltersScreen;
