import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';
import { TileRender } from '@source/Helper';

interface Style {
  container: ImageStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
  },
});

const Player = ({ body: { position, size } }) => {
  const customStyle = {
    left: position.x,
    top: position.y,
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

export default Player;
