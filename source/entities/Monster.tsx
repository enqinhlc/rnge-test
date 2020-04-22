import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ENEMY_SIZE, ANIMATIONS } from '../Constants';
import SpriteSheet from 'rn-sprite-sheet';
import Images from '../../assets/images/index';

interface Style {
  EnemyShip: ViewStyle;
  textStyle: TextStyle;
  bar: ViewStyle;
  health: ViewStyle;
}

export interface EnemyShipTypes {
  position: number[];
  color: string;
  health: number;
}

const styles = StyleSheet.create<Style>({
  EnemyShip: {
    width: ENEMY_SIZE,
    height: ENEMY_SIZE,
    borderRadius: ENEMY_SIZE / 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0,0,0,.30)',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 2,
  },
  bar: {
    width: '100%',
    height: 4,
    backgroundColor: 'black',
    zIndex: 3,
  },
  health: {
    backgroundColor: 'green',
    height: 4,
    width: '5%',
  },
});

const Monster = ({
  body: { position, size, bounds },
  health,
  distance,
  animation,
}: EnemyShipTypes) => {
  const demonRef = useRef();
  const { width, height } = size;

  const customStyle: ViewStyle = {
    left: position.x - bounds.x,
    top: position.y - bounds.y,
    width,
    height,
  };

  useEffect(() => {
    demonRef.current.play({
      type: ANIMATIONS.DEMON.IDLE,
      fps: 4,
      loop: true,
      onFinish: () => {},
    });
  }, [animation]);

  return (
    <View style={[styles.EnemyShip, customStyle]}>
      <View style={styles.bar}>
        <View style={[styles.health, { width: `${health}%` }]} />
      </View>
      <SpriteSheet
        ref={demonRef}
        source={Images.demonSprite}
        columns={6}
        rows={4}
        width={64}
        animations={Images.demonSpriteData}
      />
    </View>
  );
};

export default Monster;
