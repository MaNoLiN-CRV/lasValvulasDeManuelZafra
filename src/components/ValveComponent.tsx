import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { group } from '../api/api'

export default function ValveComponent({name, values }:group) {
  return (
    <FlatList data={values} 
    renderItem={({item}) => 
    <View>
        <Text>{item.name}</Text>
    </View>
} />
  )
}