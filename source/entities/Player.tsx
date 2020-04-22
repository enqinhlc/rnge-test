import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';
import { PLAYER_SIZE, ANIMATIONS } from '../Constants';
import SpriteSheet from 'rn-sprite-sheet';
import Images from '../../assets/images/index';

interface Style {
  player: ViewStyle;
}

export interface SpaceShipTypes {
  position: number[];
}

const styles = StyleSheet.create<Style>({
  player: {
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

const Player = ({
  body: { position, size, bounds },
  animation,
}: SpaceShipTypes) => {
  const playerWomenRef = useRef();
  const { width, height } = size;
  const customStyle: ViewStyle = {
    left: position.x,
    top: position.y,
    width,
    height,
  };

  useEffect(() => {
    if (animation === ANIMATIONS.PLAYER.WALK) {
      playerWomenRef.current.play({
        type: ANIMATIONS.PLAYER.WALK, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 5, // frames per second
        loop: true, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }

    if (animation === ANIMATIONS.PLAYER.SKILL) {
      playerWomenRef.current.play({
        type: ANIMATIONS.PLAYER.SKILL, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 44, // frames per second
        loop: false, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }

    if (animation === ANIMATIONS.PLAYER.STOP) {
      playerWomenRef.current.play({
        type: ANIMATIONS.PLAYER.STOP, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 5, // frames per second
        loop: true, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }
  }, [animation]);

  return (
    <View style={[styles.player, customStyle]}>
      <SpriteSheet
        ref={playerWomenRef}
        source={Images.playerWomanSprite}
        columns={4}
        rows={11}
        width={64}
        animations={{
          [ANIMATIONS.PLAYER.STOP]: [0],
          [ANIMATIONS.PLAYER.WALK]: [28],
          [ANIMATIONS.PLAYER.SKILL]: Array.from(
            { length: 40 - 12 },
            (v, i) => i + 12,
          ),
        }}
      />
    </View>
  );
};

export default Player;
