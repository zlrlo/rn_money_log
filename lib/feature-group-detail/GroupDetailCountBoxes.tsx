import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';

export const GroupDetailCountBoxes = () => {
  return (
    <View style={tw`border-2 flex-row justify-between`}>
      <View style={tw`border-2 w-14 h-14`}></View>
      <View style={tw`border-2 w-14 h-14`}></View>
      <View style={tw`border-2 w-14 h-14`}></View>
      <View style={tw`border-2 w-14 h-14`}></View>
    </View>
  );
};
