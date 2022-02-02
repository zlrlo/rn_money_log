import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';

export const GroupDetailImageCard = () => {
  const days = [
    {date: '2022-02-01'},
    {date: '2022-02-02'},
    {date: '2022-02-03'},
  ];

  return (
    <View style={tw`-my-5`}>
      {days.map(() => {
        return <View style={tw`border-2 h-60 rounded-xl my-5`}></View>;
      })}
    </View>
  );
};
