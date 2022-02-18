import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';


export const restaurants = [
    {
        name: 'Thai food restaurant',
        image_url: 'https://images.dailyhive.com/20200127165207/shutterstock_761494024.jpg',
        categories: ["Thai"],
        price: "$$",
        reviews: 3435,
        rating: 4.5,
    },
    {
        name: 'Chinesse food restaurant',
        image_url: 'https://images.dailyhive.com/20200127165207/shutterstock_761494024.jpg',
        categories: ["Restaurant"],
        price: "$$",
        reviews: 3435,
        rating: 4,
    },
    {
        name: 'india food restaurant',
        image_url: 'https://images.dailyhive.com/20200127165207/shutterstock_761494024.jpg',
        categories: ["Restaurant"],
        price: "$$",
        reviews: 3435,
        rating: 1.0,
    },
];


export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
        {props.restaurantData.map((restaurant, index) => (
            <TouchableOpacity 
                key={index}  
                activeOpacity={1} 
                style={tw`mb-30px`} 
                onPress={() => navigation.navigate("RestaurantDetail",{
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories,
                })}>
                <View style={tw`mt-10px p-10px bg-white`}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>    
            </TouchableOpacity>
        ))}
    </>
  );
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={tw`w-full h-180px`}
        />
        <TouchableOpacity style={tw`absolute right-18px top-18px`}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={tw`flex-row justify-between items-center mt-10px`}>
        <View>
            <Text style={tw`text-sm font-bold`}>{props.name}</Text>
            <Text style={tw`text-gray-300`}>30-45 mins</Text>
        </View>
        <View style={tw`bg-gray-300 h-30px w-30px justify-center rounded-15px`}>
            <Text style={tw`text-center`}>{props.rating}</Text>
        </View>
    </View>
);
