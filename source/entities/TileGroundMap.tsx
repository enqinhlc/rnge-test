import React from 'react';
import { View, StyleSheet, ViewStyle, Image, ImageStyle } from 'react-native';
import Camera from '@source/classes/Camera';
import { TileRender } from '@source/Helper';
import { TILE_SIZE } from '@source/Constants';

interface Style {
  container: ViewStyle;
  tile: ImageStyle;
  row: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    backgroundColor: '#000',
  },
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  row: {
    flexDirection: 'row',
  },
});

const TileGroundMap = ({ body: { position, size }, TileMap }) => {
  const offset = Camera.getOffset();
  const customStyle = {
    left: position.x - offset.x,
    top: position.y - offset.y,
  };

  return (
    <View style={(styles.container, customStyle)}>
      {TileMap.map((row, i) => {
        return (
          <View style={styles.row}>
            {row.map((tile, j) => {
              return (
                <Image
                  source={TileRender(tile)}
                  resizeMode="stretch"
                  style={styles.tile}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default TileGroundMap;
