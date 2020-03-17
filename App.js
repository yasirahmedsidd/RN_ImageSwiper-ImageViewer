import React, {useState} from 'react';

import SwiperFlatListComponent from './SwiperFlatListComponent';
import ImageViewerComponent from './ImageViewerComponent';
import {View, Text} from 'react-native';
const App = () => {
  const [currIndex, setCurrIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const appendIndex = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = {uri: arr[i]};
      newArr[i].index = i;
    }
    return newArr;
  };

  const images = [
    'https://i.picsum.photos/id/201/500/500.jpg',
    'https://i.picsum.photos/id/202/500/500.jpg',
    'https://i.picsum.photos/id/203/500/500.jpg',
    'https://i.picsum.photos/id/204/500/500.jpg',
    'https://i.picsum.photos/id/48/500/500.jpg',
  ];

  const newImages = appendIndex(images);

  return (
    <>
      <SwiperFlatListComponent
        delay={5}
        data={newImages}
        dotActiveColor="#FFF"
        dotInactiveColor="#AAA"
        imgHeight={400}
        setCurrIndex={setCurrIndex}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
      <ImageViewerComponent
        currIndex={currIndex}
        data={newImages}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

export default App;
