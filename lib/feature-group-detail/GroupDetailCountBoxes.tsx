import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export const GroupDetailCountBoxes = () => {
  return (
    <View style={tw`border-b-2 flex-row justify-between px-5`}>
      <View
        style={tw`w-16 h-14 p-1 items-center border-t-2 border-l-2 border-r-2`}>
        <Text style={tw`text-xs`}>2022년</Text>
        <Text style={tw`text-base font-bold flex-1`}>2월</Text>
      </View>
      <View style={tw`w-16 h-14 p-1 items-center`}>
        <Text style={tw`text-xs`}>총 소비</Text>
        <Text style={tw`text-base font-bold flex-1`}>32만</Text>
      </View>
      <View style={tw`w-16 h-14 p-1 items-center`}>
        <Text style={tw`text-xs`}>최고 소비</Text>
        <Text style={tw`text-base font-bold flex-1`}>5만</Text>
      </View>
      <View style={tw`w-16 h-14 p-1 items-center`}>
        <Text style={tw`text-xs`}>최저 소비</Text>
        <Text style={tw`text-base font-bold flex-1`}>0.5만</Text>
      </View>
    </View>
  );
};
