import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab() {
  return (
    <View style={tw`flex-row m-10px mx-30px justify-between`}>
        <Icon icon='home' text="Home" />
        <Icon icon='search' text="Browse" />
        <Icon icon='shopping-bag' text="Grocery" />
        <Icon icon='receipt' text="Orders" />
        <Icon icon='user' text="Account" />
      
    </View>
  );
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon} 
                size={25} 
                style={tw`mb-3px self-center`} 
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)
