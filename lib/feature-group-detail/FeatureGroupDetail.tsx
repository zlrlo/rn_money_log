import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {GroupDetailHeader} from './GroupDetailHeader';
import {GroupDetailProfile} from './GroupDetailProfile';

export const FeatureGroupDetail = () => {
  return (
    <View style={tw`px-4`}>
      <GroupDetailHeader />
      <GroupDetailProfile />
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
