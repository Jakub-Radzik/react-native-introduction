import React,{useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const MyFlatList = () => {
    const data = [
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
      ]

  return (
    <FlatList 
          data={data} 
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
  );
};

const styles = StyleSheet.create({
    item: {
      fontSize: 40
    }
  });

export default MyFlatList;
