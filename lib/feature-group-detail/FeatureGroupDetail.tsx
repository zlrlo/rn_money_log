import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {GroupDetailHeader} from './GroupDetailHeader';

export const FeatureGroupDetail = () => {
  return (
    <View style={tw`px-4`}>
      <GroupDetailHeader />

      {/* group profile */}
      <View style={tw`border-2`}>
        <Text>group profile</Text>
      </View>
      {/* count boxes */}
      <View style={tw`border-2`}>
        <Text>count boxes</Text>
      </View>
      {/* image card slider */}
      <View style={tw`border-2`}>
        <Text>image card slider</Text>
      </View>
    </View>
  );
};
