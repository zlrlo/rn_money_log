import React from 'react';
import {View, Text, Image} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

export const GroupDetailImageCard = () => {
  const days = [
    {id: 1, date: '2022년 02월 01일', sum: 21000, place: '강남 파스타'},
    {id: 2, date: '2022년 02월 02일', sum: 25000, place: '강남 파스타'},
    {id: 3, date: '2022년 02월 03일', sum: 35500, place: '강남 파스타'},
  ];

  return (
    <View style={tw`-my-5`}>
      {days.map(({id, date, sum, place}) => {
        return (
          <View key={id} style={tw`my-5`}>
            <View style={tw`flex-row`}>
              <Text style={tw`text-lg font-medium`}>{date}</Text>

              <View style={tw`ml-3 justify-center`}>
                <Text style={tw`text-sm font-medium`}>
                  {sum.toLocaleString()}원
                </Text>
              </View>
            </View>
            <View style={tw`h-96 mt-1`}>
              <View style={tw`flex-7`}>
                <Image
                  source={{
                    uri: 'https://i.picsum.photos/id/110/5616/3744.jpg?hmac=9pvF5kuiWFYdp22iPMoUCWcrLgGhK0EkrwHEbq5WrFQ',
                  }}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={tw`flex-1 pt-4`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`font-semibold`}>{place}</Text>
                  <View style={tw`ml-1`}>
                    <View style={tw`flex-row`}>
                      <Icon name="star" size={14}></Icon>
                      <Icon name="star" size={14}></Icon>
                      <Icon name="star" size={14}></Icon>
                      <Icon name="star" size={14}></Icon>
                    </View>
                  </View>
                </View>

                <View style={tw`flex-row flex-1`}>
                  <View style={tw`justify-center`}>
                    <View style={tw`flex-row`}>
                      <Icon name="cash-outline" size={16}></Icon>
                      <Text style={tw`ml-1`}>{sum.toLocaleString()}원</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
