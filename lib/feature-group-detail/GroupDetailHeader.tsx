import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

export const GroupDetailHeader = () => {
  return (
    <View style={tw`border-2 ml-auto`}>
      <View style={tw`w-12 flex items-center`}>
        <Icon name="cog" size={30}></Icon>
      </View>
    </View>
  );
};
