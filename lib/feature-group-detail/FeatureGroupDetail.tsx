import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {GroupDetailCountBoxes} from './GroupDetailCountBoxes';
import {GroupDetailHeader} from './GroupDetailHeader';
import {GroupDetailProfile} from './GroupDetailProfile';

export const FeatureGroupDetail = () => {
  return (
    <View style={tw`px-4`}>
      <GroupDetailHeader />
      <GroupDetailProfile />
      <View style={tw`my-9`}>
        <GroupDetailCountBoxes />
      </View>
      {/* image card slider */}
      <View style={tw`border-2`}>
        <Text>image card slider</Text>
      </View>
    </View>
  );
};
