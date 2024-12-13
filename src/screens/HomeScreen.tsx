import React from 'react';
import { Text } from 'react-native';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useGetItemsQuery, useRefreshItemsMutation } from '../api/api'; 
import { setGroups } from '../slices/groupSlice';
import ValveComponent from '../components/ValveComponent';
import { RootState } from '../store/store';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { groups } = useSelector((state : RootState) => state.group);
  const { data, isLoading, isError } = useGetItemsQuery({});
  const [updateItems, { isLoading : isUpdating }] = useRefreshItemsMutation({});

 
  React.useEffect(() => {
    if (data) {
      dispatch(setGroups(data));
    }
  }, [data]);

  if (isLoading ) return <Text>Loading...</Text>;

  return (
    <View>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ValveComponent name={item.name} values={item.values} onUpdate={updateItems} />
        )}
      />
    </View>
  );
}
