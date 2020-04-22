import React from 'react';
import { View, ViewStyle, StyleSheet, Image } from 'react-native';
import { IMAGE_DROP_SIZE } from '@source/Constants';

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
    width: IMAGE_DROP_SIZE,
    height: IMAGE_DROP_SIZE,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'orange',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DropedItem = ({ body: { position, bounds }, color, item }: BoxType) => {
  const customStyle: ViewStyle = {
    left: position.x - bounds.x,
    top: position.y - bounds.y,
  };

  return (
    <View style={[styles.box, customStyle]}>
      <Image
        source={item.image}
        resizeMode="stretch"
        style={{ width: IMAGE_DROP_SIZE, height: IMAGE_DROP_SIZE }}
      />
    </View>
  );
};

export default DropedItem;
