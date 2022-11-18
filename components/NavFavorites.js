import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';


const data = [
    {
        id:'home',
        icon: 'home',
        location: 'Home',
        destination: "Los Angeles, CA, USA",
    },
    {
        id:'school',
        icon: "school",
        location: 'School',
        destination: "Merced, Ca, USA",
    },
];

/*
MAKE BUTTONS CLICKABLE LATER

*/

const NavFavorites = () => {
    const dispatch = useDispatch();
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View 
        style={[tw`bg-gray-200`, {height: 0.5}]}/>
    )}
    renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity 
        style={tw`flex-row items-center p-5`}
        >
    
        
            <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})