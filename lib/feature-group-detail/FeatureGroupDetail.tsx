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
      <View style={tw`px-4`}>
        <GroupDetailHeader />
      </View>
      <ScrollView style={tw`px-4`}>
        <GroupDetailProfile />
        <View style={tw`my-9`}>
          <GroupDetailCountBoxes />
        </View>
        <GroupDetailImageCard />
      </ScrollView>
    </View>
  );
};
