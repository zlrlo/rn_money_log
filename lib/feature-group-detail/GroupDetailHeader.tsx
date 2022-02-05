import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

export const GroupDetailHeader = () => {
  return (
    <View style={tw`ml-auto`}>
      <View style={tw`w-12 h-7 flex items-center justify-center`}>
        <Icon name="cog" size={28}></Icon>
      </View>
    </View>
  );
};
