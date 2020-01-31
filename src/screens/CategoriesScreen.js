import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: item.id
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
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

export default CategoriesScreen;
