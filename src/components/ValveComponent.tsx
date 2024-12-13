import { View, Text, FlatList, Switch } from 'react-native'
import React from 'react'
import { group, useRefreshItemsMutation, valve } from '../api/api'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setGroups } from '../slices/groupSlice';

export default function ValveComponent({ name, values, onUpdate }: { name: string, values: valve[], onUpdate: any }) {
  const dispatch = useDispatch();
  const { groups } = useSelector((state: RootState) => state.group);
  

  const handleSwitchToggle = (itemName: string, currentState: boolean) => {
    const newGroups = groups.map(group => {
      if (group.name === name) {
        const updatedValues = group.values.map(valve => 
          valve.name === itemName ? { ...valve, state: !currentState } : valve
        );
        return { ...group, values: updatedValues };
      }
      return group;
    });

    dispatch(setGroups(newGroups));
    onUpdate(newGroups);
  };

  return (
    <FlatList 
      data={values}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Switch 
            value={item.state} 
            onValueChange={() => handleSwitchToggle(item.name, item.state)} 
          />
        </View>
      )} 
    />
  );
}
