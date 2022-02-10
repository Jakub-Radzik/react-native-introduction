const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

import React,{ useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import MyFlatList from './Components/MyFlatList';
import MyFlexDim from './Components/MyFlexDim';
import MyPercentageDim from './Components/MyPercentageDim';
import MyScrollView from './Components/MyScrollView';
import MySectionList from './Components/MySectionList';


const App = () => {


  return (
    <MyPercentageDim/>
      // // <View>
      //   {/* <MyFlatList/> */}
      //   {/* <MyScrollView/> */}
      //   {/* <MySectionList/> */}
      //   {/* <MyFlexDim/> */}
      // // </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    fontSize: 40
  }
});

export default App;
