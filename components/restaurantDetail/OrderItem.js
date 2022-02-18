import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function OrderItem({item}) {
    const { title, price } = item;

  return (
    <View style={tw`p-15px flex-row justify-between border-b-0 border-b-black`}>
      <Text style={tw`font-semibold text-lg `}>
          {title}
      </Text>
      <Text style={tw`opacity-70 text-lg`}>
          {price}
      </Text>
    </View>
  )
}