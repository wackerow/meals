import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'; //New to me! --singular--
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FavoriteIcon = props => {
  const isFav = true;

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Colors.secondary}
    />

    // <TouchableOpacity onPress={props.onPress}>
    //   <View style={styles.container}>
    //     {isFav ? (
    //       <Ionicons
    //         name={'ios-heart'}
    //         style={[styles.filledHeart, styles.iconSize]}
    //       />
    //     ) : (
    //       <Ionicons
    //         name={'ios-heart-empty'}
    //         style={[styles.emptyHeart, styles.iconSize]}
    //       />
    //     )}
    //   </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 15
  },
  iconSize: {
    fontSize: 30
  },
  emptyHeart: {
    color: 'gray'
  },
  filledHeart: {
    color: 'rgba(255,50,50,0.9)'
  }
});

export default FavoriteIcon;
