import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';


export default function HeaderTab(props) {
  return (
    <View style={tw`flex-row self-end`}>
      <HeaderButton 
        text="Delivery" 
        btnColor="black" 
        textColor="white" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab} 
      />
      <HeaderButton 
        text="Pickup" 
        btnColor="white" 
        textColor="black" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab} 
      />
    </View>
  );
}

const HeaderButton = (props) =>(
  <View>
    <TouchableOpacity 
      style={tw`bg-${props.activeTab === props.text ? "black" : "white"} py-6px px-16px rounded-30px`}
      onPress = {() => props.setActiveTab(props.text)}
    >
      <Text 
        style={tw`text-${props.activeTab === props.text ? "white" : "black"} font-bold`}
      >{props.text}</Text>
    </TouchableOpacity>
  </View>
);
