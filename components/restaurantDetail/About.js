import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const yelpRestaurantInfo = {
  name: "Good Thai Food",
  image: "https://images.dailyhive.com/20200127165207/shutterstock_761494024.jpg",
  price: "$$",
  reviews: "1500",
  rating: "4.5",
  categories: [{title: "Thai"}, {title: "Vegetarian"}],
};


export default function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(", ");
  const description = `${formattedCategories} ${price ? " · " + price: ""} · ${rating} stars (${reviews}+)`;
  
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={tw`w-full h-180px`} />
)
const RestaurantName = (props) => (
    <Text style={tw`text-2xl font-bold mt-10px mx-15px`}>{props.name}</Text>
)
const RestaurantDescription = (props) => (
    <Text style={tw`mt-10px mx-15px text-sm`}>{props.description}</Text>
)