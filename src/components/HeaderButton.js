import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'; //New to me! --singular--
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const HeaderButtonComponent = props => {
  const iconColor = Platform.OS === 'android' ? 'white' : Colors.primary;
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={iconColor}
    />
  );
};

export default HeaderButtonComponent;
