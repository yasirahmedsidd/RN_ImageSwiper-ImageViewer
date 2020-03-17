import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ImageView from 'react-native-image-view';

const ImageViewerComponent = ({currIndex, data, isVisible, setIsVisible}) => {
  const updateImageArr = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = {source: arr[i]};
      newArr[i].width = 400;
      newArr[i].height = 400;
    }
    return newArr;
  };

  const xyz = updateImageArr(data);
  return (
    <>
      <StatusBar hidden />
      <ImageView
        images={xyz}
        imageIndex={currIndex}
        isVisible={isVisible}
        animationType="slide"
        onClose={() => {
          setIsVisible(false);
        }}
      />
    </>
  );
};

export default ImageViewerComponent;
