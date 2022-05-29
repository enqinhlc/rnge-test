import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';
import { TileRender } from '@source/Helper';
import Camera from '@source/classes/Camera';

interface Style {
  container: ImageStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
  },
});

const Demon = ({ body: { position, size } }) => {
  const offset = Camera.getOffset();
  const customStyle = {
    left: position.x - offset.x,
    top: position.y - offset.y,
    width: size.width,
    height: size.height,
  };
  return (
    <Image
      source={TileRender(1)}
      resizeMode="stretch"
      style={[styles.container, customStyle]}
    />
  );
};

export default Demon;
