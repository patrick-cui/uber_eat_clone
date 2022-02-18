import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
//setModalVisible(false);

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

  const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((pre, cur) => pre + cur, 0);
  const totalUSD = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  /*
  const addOrderToFirebase = () => {
    const db = firebase;
    db.collection('orders').add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestone.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
  }
  */
  //style={tw`flex-1 justify-end`} 
  //style={tw`bg-white p-16px h-500px rounded-1px`}
  //stye={tw`text-center text-lg font-semibold mb-10px`}
  //style={tw`flex-row justify-between mt-15px`}
  //style={tw`text-left font-semibold mb-10px`}
  const checkoutModalContent = () => {
    return( 
      <>
        <View style={tw`flex-1 justify-end`}>
          <View style={tw`bg-white p-16px h-500px rounded-1px`}>
            <View style={tw`items-center`}>
              <Text stye={tw`items-center text-center text-lg font-semibold mb-10px`}>
                {restaurantName}
              </Text>
            </View>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={tw`flex-row justify-between mt-15px`}>
              <Text style={tw`text-left font-semibold mb-10px`}>
                Subtotal
              </Text>
              <Text>
                {totalUSD}
              </Text>
            </View>
            <View style={tw` justify-center`}>
              <TouchableOpacity 
                onPress={() => 
                  //addOrderToFirebase()
                  setModalVisible(false)
                }
                style={tw`mt-20px bg-black items-center p-13px rounded-30px  relative`
              }>
                <Text style={tw`text-white text-lg`}>
                  Checkout
                </Text>
                <Text style={tw`absolute right-20px text-white top-19px`}>
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
    <Modal 
      animationType='slide' 
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      {checkoutModalContent()}
    </Modal>
    {total ? (
      <View style={tw`flex-1 items-center flex-row absolute bottom-30px z-999`}>
          <View style={tw`flex-row justify-center w-full`}>
              <TouchableOpacity 
                onPress={() => setModalVisible(true)}
                style={tw`mt-20px bg-black items-center p-15px rounded-150px w-300px relative flex-row justify-end`}
              >
                  <Text style={tw`text-white items-center mr-15`}>View Cart</Text> 
                  <Text style={tw`text-white`}>{totalUSD}</Text>
              </TouchableOpacity>
          </View>
      </View>
    ):(
      <></>
    )}
    </>
  )
}