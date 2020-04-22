import React from 'react';
import { Image, ViewStyle, StyleSheet, ImageStyle, View } from 'react-native';
import Images from '../../assets/images';
import { Coordinates, Dimensions } from '@source/classes/Entitiy';

export interface GroundMapType {
  position: number[];
  size: number[];
  color: string;
}

interface Style {
  GroundMap: ImageStyle;
}
const styles = StyleSheet.create<Style>({
  GroundMap: {
    borderColor: 'black',
    backgroundColor: 'orange',
    position: 'absolute',
  },
});

const GroundMap = ({ body: { position, size } }: GroundMapType) => {
  const { width, height }: Dimensions = size;
  const { x, y }: Coordinates = position;

  const customStyle: ViewStyle = {
    left: x,
    top: y,
    width: width,
    height: height,
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <Image style={[styles.GroundMap, customStyle]} source={Images.map} />
    </View>
  );
};

export default GroundMap;
