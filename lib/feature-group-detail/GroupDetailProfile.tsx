import React from 'react';
import {Image, Text, View} from 'react-native';
import tw from 'twrnc';

export const GroupDetailProfile = () => {
  return (
    <View style={tw`items-center`}>
      <View style={tw`rounded-full p-1 bg-black`}>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k',
          }}
          style={tw`w-24 h-24 rounded-full`}
        />
      </View>

      <View style={tw`items-center mt-7`}>
        <Text style={tw`text-xl font-extrabold`}>그룹 이름 자리</Text>

        <View style={tw`mt-3`}>
          <Text style={tw`text-sm text-gray-600`}>그룹 설명 자리</Text>
        </View>
      </View>
    </View>
  );
};
