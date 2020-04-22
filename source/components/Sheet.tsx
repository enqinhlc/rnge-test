import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

const Sheet = ({
  width,
  height,
  data,
  fps,
}: {
  width: number;
  height: number;
  fps: number;
  data: ImageSourcePropType[];
}) => {
  const [imgIndex, setImageIndex] = useState(0);

  const interval = useRef(
    setInterval(() => {
      const i = imgIndex === data.length - 1 ? 0 : imgIndex + 1;
      setImageIndex(i);
    }, 1000 / fps),
  ).current;

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ width, height }}>
      <Image
        source={data[imgIndex]}
        resizeMode="stretch"
        style={{ width, height }}
      />
    </View>
  );
};

export default Sheet;
