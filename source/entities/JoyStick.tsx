import React, { useRef } from 'react';
import { View, StyleSheet, ViewStyle, Easing } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  JOYSTICK_SIZE,
  JOYSTICK_X,
  JOYSTICK_Y,
  JOYSTICK_TRASHOLD,
  EVENTS,
} from '../Constants';

interface Style {
  container: ViewStyle;
  joyStick: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    width: JOYSTICK_SIZE,
    height: JOYSTICK_SIZE,
    borderRadius: JOYSTICK_SIZE / 2,
    backgroundColor: 'rgba(77, 142, 247, .2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joyStick: {
    width: (JOYSTICK_SIZE * 2) / 4,
    height: (JOYSTICK_SIZE * 2) / 4,
    borderRadius: (JOYSTICK_SIZE * 2) / 3 / 2,
    backgroundColor: 'rgba(77, 142, 247, .3)',
  },
});

const JoyStick = ({ gameEngine }) => {
  const transformX = useRef(new Animated.Value(0)).current;
  const transformY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = ({ nativeEvent }) => {
    let valueX = nativeEvent.translationX;
    let valueY = nativeEvent.translationY;

    if (valueX > 0) {
      valueX = valueX < JOYSTICK_TRASHOLD ? valueX : JOYSTICK_TRASHOLD;
    } else {
      valueX = valueX > -JOYSTICK_TRASHOLD ? valueX : -JOYSTICK_TRASHOLD;
    }

    if (valueY > 0) {
      valueY = valueY < JOYSTICK_TRASHOLD ? valueY : JOYSTICK_TRASHOLD;
    } else {
      valueY = valueY > -JOYSTICK_TRASHOLD ? valueY : -JOYSTICK_TRASHOLD;
    }

    gameEngine.dispatch({
      type: EVENTS.JOYSTICK_MOVE,
      value: { x: valueX / 10, y: valueY / 10 },
    });
    gameEngine.dispatch({
      type: EVENTS.PLAYER_COORDS,
      value: { x: valueX / 10, y: valueY / 10 },
    });

    transformX.setValue(valueX);
    transformY.setValue(valueY);

    if (nativeEvent.state === State.END) {
      gameEngine.dispatch({ type: EVENTS.PLAYER_STOP });
      [transformX, transformY].map((transform) => {
        Animated.timing(transform, {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
        }).start();
      });
    }
  };

  // const _handleMove = (evt, { dx, dy }) => {};

  // const panGesture = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderStart: _handleMove,
  //   onPanResponderMove: _handleMove,
  //   onPanResponderRelease: () => {
  //     gameEngine.dispatch({ type: EVENTS.PLAYER_STOP });
  //     Animated.timing(panValue, {
  //       toValue: { x: 0, y: 0 },
  //       useNativeDriver: true,
  //     }).start();
  //   },
  // });

  const customStyle = {
    left: JOYSTICK_X,
    top: JOYSTICK_Y,
  };

  const customAnimation = {
    transform: [{ translateX: transformX }, { translateY: transformY }],
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onGestureEvent}>
      <View style={[styles.container, customStyle]}>
        <Animated.View style={[styles.joyStick, customAnimation]} />
      </View>
    </PanGestureHandler>
  );
};

export default JoyStick;
