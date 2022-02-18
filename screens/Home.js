import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import BottomTab from '../components/home/BottomTab';
import RestaurantItems, { restaurants } from '../components/home/RestaurantItems';

const YELP_API_KEY = 'JidiDs8hPVH4iCysv_K9OdjZNDz--gSkgk50kXTD00ZRRMuWqVpeBPf0N5KOuXIKYgeuYpjhgMCOWWQBBzZ0CzbepNYibRGLGIQs7P8wpQi9zQMrnMClkB7jTKYDYnYx';

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [city, setCity] = useState('london');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantData = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => 
        setRestaurantData(
          json.businesses/*.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())*/
          )
      );
  };

  useEffect(() => {
    getRestaurantData();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={tw`bg-gray-100 flex-1`}>
      <View style={tw`bg-white p-5px`}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}


