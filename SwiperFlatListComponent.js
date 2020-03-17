import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
const {height, width} = Dimensions.get('window');

const SwiperFlatListComponent = ({
  data,
  dotActiveColor = '#FFF',
  dotInactiveColor = '#DDD',
  imgHeight = 300,
  delay = 5,
  setCurrIndex,
  setIsVisible,
  isVisible,
}) => {
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={isVisible ? 59 : delay}
        autoplayLoop
        // index={0}
        showPagination
        paginationDefaultColor={dotInactiveColor}
        paginationActiveColor={dotActiveColor}
        paginationStyleItem={{width: 8, height: 8}}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            delayPressIn={50}
            delayPressOut={50}
            onPress={() => {
              setCurrIndex(item.index);
              setIsVisible(true);
            }}
            activeOpacity={1}>
            <Image
              source={{uri: item.uri}}
              style={{width, height: imgHeight}}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SwiperFlatListComponent;

const styles = StyleSheet.create({});
