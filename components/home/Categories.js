import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const items = [
    {
        image: require('../../assets/images/take-away.png'),
        text: "Pick-up",
    },
    {
        image: require('../../assets/images/soft-drinks.png'),
        text: "Soft Drinks",
    },
    {
        image: require('../../assets/images/bakery.png'),
        text: "Bakery Items",
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: "Fast Foods",
    },
    {
        image: require('../../assets/images/deal.png'),
        text: "Deals",
    },
    {
        image: require('../../assets/images/bubble-tea.png'),
        text: "Coffee & Tea",
    },
];

export default function Categories() {
  return (
    <View style={tw`mt-5px bg-white pl-20px py-10px`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View key={index} style={tw`items-center mr-30px`} >
                    <Image source={items[index].image} style={tw`w-9 h-9 `} />
                    <Text style={tw`text-xs font-bold font-black`}>{items[index].text}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  );
}
