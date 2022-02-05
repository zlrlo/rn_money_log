import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import tw from 'twrnc';
import {GroupDetailCountBoxes} from './GroupDetailCountBoxes';
import {GroupDetailHeader} from './GroupDetailHeader';
import {GroupDetailImageCard} from './GroupDetailImageCard';
import {GroupDetailProfile} from './GroupDetailProfile';

export const FeatureGroupDetail = () => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[2]}>
        <View style={tw`px-1`}>
          <GroupDetailHeader />
        </View>
        <GroupDetailProfile />
        <View style={tw`my-9 bg-white`}>
          <GroupDetailCountBoxes />
        </View>
        <View style={tw`px-5`}>
          <GroupDetailImageCard />
        </View>
      </ScrollView>
    </View>
  );
};
