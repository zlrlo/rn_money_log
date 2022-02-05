/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {FeatureGroupDetail} from './lib/feature-group-detail';

const App = () => {
  return (
    <View style={tw`pt-12 bg-white`}>
      <FeatureGroupDetail />
    </View>
  );
};

export default App;
