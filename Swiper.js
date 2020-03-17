import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swipper from 'react-native-swiper-flatlist';
const Swiper = () => {
  const images = [
    {uri: 'https://i.picsum.photos/id/201/500/500.jpg'},
    {uri: 'https://i.picsum.photos/id/202/500/500.jpg'},
    {uri: 'https://i.picsum.photos/id/203/500/500.jpg'},
  ];
  return (
    <Swipper
      style={styles.wrapper}
      showsPagination
      horizontal
      loop
      index={0}
      autoplay
      autoplayDirection
      loadMinimal
      loadMinimalSize={2}
      loadMinimalLoader
      dotColor="red"
      activeDotColor="red">
      {images.map(img => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log(img.uri)}
          style={styles.slide1}
          key={img.uri}>
          {/* <Text>{img.uri}</Text> */}
          <Image
            source={{uri: img.uri}}
            style={styles.img}
            resizeMode="cover"
          />
          <Text>{images.length}</Text>
        </TouchableOpacity>
      ))}
    </Swipper>
  );
};

export default Swiper;
const {width, height} = Dimensions.get('window');
const border = {borderWidth: 1, borderColor: 'red'};
const styles = StyleSheet.create({
  wrapper: {...border, width},
  slide1: {
    flex: 1,
    ...border,
    borderColor: 'yellow',
  },
  img: {width, height: 200},
});
