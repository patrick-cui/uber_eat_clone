import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SearchBar({ cityHandler }) {
  return (
    <View style={tw`mt-5px flex-row`}>
        <GooglePlacesAutocomplete 
          query={{ key: "AIzaSyBUgzhkvgNVfik2ymOzrkN26hFJ4uN26Og" }}
          onPress={(data, details = null) => {
            const city = data.description.split(',')[0];
            cityHandler(city);
          }}
          placeholder="Search" 
          styles={{
            textInput: {
              backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: "700",
              marginTop:7,
            },
            textInputContainer: {
              backgroundColor: "#eee",
              borderRadius: 50,
              flexDriection: "row",
              alignItems: "center",
              marginRight: 10,
              height: 50
            },
          }}
          renderLeftButton = {() => 
            <View style={tw`ml-10px`}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          }
          renderRightButton = {() =>
            <View style={tw`flex-row mr-8px bg-white p-9px rounded-30px items-center`}>
              <AntDesign name="clockcircle" size={11} style={tw`mr-6px`} />
              <Text>Search</Text>
            </View>
          }
        />
    </View>
  );
}
