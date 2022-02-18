import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useState } from 'react';
import { auth } from '../firebase';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    /*
    useEffect(() => {
        const unsubscibe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home");
            }

        })
        return unsubscibe;
    }, []);
    */

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email, 'signed up!');
        })
        .catch(error => alert(error.message));
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email, 'Logged in');
            auth.onAuthStateChanged(user => {
                if (user) {
                    navigation.navigate("Home");
                }
            });
        })
        .catch(error => alert(error.message));
    }


  return (
    <KeyboardAvoidingView 
        style={tw`flex-1 justify-center items-center mt-200px`}
        behavior="padding"
    >
        <View style={tw`w-8/10`}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={tw`bg-white px-15px py-10px rounded-10px mt-5px`}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={tw`bg-white px-15px py-10px rounded-10px mt-5px`}
                secureTextEntry
            />
        </View>
        <View style={tw`w-6/10 justify-center items-center mt-40px`}>
            <TouchableOpacity
                onPress={handleLogin}
                style={tw`bg-blue-400 w-full p-15px rounded-10px items-center`}
            >
                <Text style={tw`text-white text-lg`}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignUp}
                style={tw`bg-blue-400 w-full p-15px rounded-10px bg-white mt-5px border-blue-400 border-2 items-center`}
            >
                <Text style={tw`text-blue-400 text-lg`}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}