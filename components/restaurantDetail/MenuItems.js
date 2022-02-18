import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';



const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato, and mozzarella",
        price: "$13.5",
        image: "https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna.jpg"
    },
    {
        title: "Pizza",
        description: "With butter lettuce, tomato, and mozzarella",
        price: "$13.5",
        image: "https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna.jpg"
    },
    {
        title: "Burger",
        description: "With butter lettuce, tomato, and mozzarella",
        price: "$13.5",
        image: "https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna.jpg"
    },
    {
        title: "Chicken Sandwich",
        description: "With butter lettuce, tomato, and mozzarella",
        price: "$13.5",
        image: "https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna.jpg"
    },
]




export default function MenuItems({ restaurantName }) {
    const dispatch = useDispatch();
    const selectedItem = (item, checkboxValue) => dispatch({ 
        type: 'ADD_TO_CART', 
        payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue },
    });

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
    const foodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item) => item.title === food.title))
    );

  return (
    <ScrollView>
        {foods.map((food, index) => (
            <View key={index}>
                <View style={tw`flex-row justify-between m-20px`}>
                    <BouncyCheckBox
                        iconStyle={{borderColor: 'lightgray', borderRadius: 10}} 
                        fillColor="green"
                        onPress={(checkboxValue) => selectedItem(food, checkboxValue)}
                        isChecked={foodInCart(food, cartItems)}
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
            </View>
        ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View style={tw`w-240px justify-evenly`}>
        <Text style={tw`font-medium`}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
            source={{ uri: props.food.image }}
            style={tw`w-100px h-100px rounded-2`}
        />
    </View>
)