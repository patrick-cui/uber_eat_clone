import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import tw from 'twrnc';
import ViewCart from '../components/restaurantDetail/ViewCart';

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
