import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Picker } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { TextInput } from "react-native";
import { Component } from "react";
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
//import { useAuth } from '../../../providers/AuthProvider';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';


//Yuying: finished the very basic setup, the type slection drow down menu missed important logic set up
//        ex: maybe can consider write a function, when the Picker.Value = 1, display the following menu for Picker 1.

//Also missed the upload picture button. I do saw some tutorial online, it is shouldn't be a big problem.

const Posts = () => {
  const navigation = useNavigation()
  const onPostNowPressed = async () => {
    console.warn('Post pressed')
    navigation.navigate('Item')
  }

  const [current, setCurrent] = useState("test");
  const [selectedValue, setSelectedValue] = useState('');
  const [value, onChangeText] = React.useState('');

  return (
    <ScrollView style={{ backgroundColor: '#E7EAF4' }}>

      <Text style={{ marginLeft: 30, marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>Select your post Type:</Text>
      <View>
        <RadioButtonGroup
          containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 30 }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#436cc9"
        >
          <RadioButtonItem value="Lost" label={<Text style={{ fontSize: 20, padding: 10, fontWeight: '700' }}>Lost          </Text>} />
          <RadioButtonItem value="Found" label={<Text style={{ fontSize: 20, padding: 10, fontWeight: '700' }}>Found</Text>} />
        </RadioButtonGroup>
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>Post Title:</Text>
      <View style={[styles.position]}>
        <TextInput
          style={{ borderColor: 'transparent', marginLeft: 30, width: 350, height: 40 }}
          onChangeText={text => onChangeText(text)}
          backgroundColor="white"
          borderRadius={5}
          placeholder="Enter your post title..."
          placeholderTextColor="#ABA6A8"
          paddingTop={10}
          paddingHorizontal={10}
          autoCapitalize="none"
          textAlignVertical="top"
          fontSize={17}
          returnKeyType="done"
          value={value}
        />
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>Item Type Selction:</Text>
      <View style={[styles.menu]}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 350 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
        >
          <Picker.Item label="Jackets/Shoes" value="jacket/shone" itemIndex="1" />
          <Picker.Item label="Personal Items" value="Personal" itemIndex="2" />
          <Picker.Item label="Electronics" value="electro" itemIndex="3" />
        </Picker>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 350 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
        >
          <Picker.Item label="Type 2 Selection" value="sel01" itemIndex="01" />
          <Picker.Item label="Type 2 Selection" value="sel02" itemIndex="02" />
          <Picker.Item label="Type 2 Selection" value="sel03" itemIndex="03" />
        </Picker>
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>More Details:</Text>
      <TextInput
        style={{ borderColor: 'transparent', marginLeft: 30, width: 350 }}
        onChangeText={text => onChangeText(text)}
        backgroundColor="white"
        borderRadius={5}
        placeholder="Enter more details about your item..."
        placeholderTextColor="#ABA6A8"
        paddingTop={8}
        paddingHorizontal={10}
        autoCapitalize="none"
        multiline={true}
        numberOfLines={8}
        textAlignVertical="top"
        fontSize={17}
        returnKeyType="done"
        value={value}
      />

      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <View style={[styles.btn01]}>
          <CustomButton
            text="Post Now"
            onPress={onPostNowPressed}
          />
        </View>
      </View>
    </ScrollView>
  )
}

// making it look pretty
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#E7EAF4',
  },
  flex: {
    flex: 1,
  },
  position:
  {
    width: 350,
    alignSelf: 'center',
    marginRight: 60,
  },
  input: {
    margin: 15,
    paddingLeft: 8,
    height: 40,
    borderColor: '#eeeeee',
    borderWidth: 1
  },
  menu: {
    width: 350,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 30,
    backgroundColor: 'white',
    marginLeft: 30
  },
  btn01: {
    width: 180,
    marginTop: 30,
    height: 60,
    marginBottom: 50,
    borderRadius: 10,
    backgroundColor: '#F3A747',
  },

})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default Posts;