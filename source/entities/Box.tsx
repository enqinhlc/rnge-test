import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

export interface BoxType {
  position: number[];
  size: number[];
  color: string;
}

interface Style {
  box: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  box: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'orange',
    position: 'absolute',
  },
});

const Box = ({ size, position, color }: BoxType) => {
  const width = size[0];
  const height = size[1];
  const x = position[0];
  const y = position[1];

  const customStyle: ViewStyle = {
    left: x,
    top: y,
    width: width,
    height: height,
    backgroundColor: color,
  };

  return <View style={[styles.box, customStyle]} />;
};

export default Box;
