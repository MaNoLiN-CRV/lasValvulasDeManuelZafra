import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { customResponse } from '../api/api'

export default function ValveComponent({name, values }:customResponse) {
  return (
    <FlatList data={values} 
    renderItem={({item}) => 
    <View>
        <Text>{item.name}</Text>
    </View>
} />
  )
}