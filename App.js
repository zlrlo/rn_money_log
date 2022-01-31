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

const App = () => {
  return (
    <View style={tw` mt-12 bg-blue-300 flex-1 items-center justify-center`}>
      <Text>MONEY LOG</Text>
    </View>
  );
};

export default App;
