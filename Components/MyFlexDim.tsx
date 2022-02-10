import {View} from 'react-native';
import React from 'react';

const MyFlexDim = () => {
  return (
    <View style={{height: 500, backgroundColor: 'red'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{flex: 2, backgroundColor: 'red'}}></View>
      <View style={{flex: 3, backgroundColor: 'yellow'}}></View>
    </View>
  );
};

export default MyFlexDim;
