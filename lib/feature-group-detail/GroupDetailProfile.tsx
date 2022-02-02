import React from 'react';
import {Image, Text, View} from 'react-native';
import tw from 'twrnc';

export const GroupDetailProfile = () => {
  return (
    <View style={tw`border-2 items-center`}>
      <View style={tw`border-2`}>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU',
          }}
          style={tw`w-20 h-20 rounded-full`}
        />
      </View>

      <View style={tw`border-2 items-center mt-7`}>
        <Text style={tw`text-xl font-extrabold`}>그룹 이름 자리</Text>

        <View style={tw`mt-3`}>
          <Text style={tw`text-sm text-gray-600`}>그룹 설명 자리</Text>
        </View>
      </View>
    </View>
  );
};
