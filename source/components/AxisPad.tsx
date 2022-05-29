import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { MAX_HEIGHT, EVENTS } from '@source/Constants';
import { useGameEngine } from 'react-native-game-engine';

interface Style {
  column: ViewStyle;
  row: ViewStyle;
  buttonContainer: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  row: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    position: 'absolute',
    top: MAX_HEIGHT - 130,
    left: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    height: 110,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
});

const AxisPad = () => {
  const gameEngine = useGameEngine();
  const sendMove = (direction) => {
    gameEngine.dispatch({ type: EVENTS.PLAYER_MOVE, direction });
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => sendMove('W')}
        style={styles.buttonContainer}>
        <Text>←</Text>
      </TouchableOpacity>
      <View style={styles.column}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => sendMove('N')}
          style={styles.buttonContainer}>
          <Text>↑</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => sendMove('S')}
          style={styles.buttonContainer}>
          <Text>↓</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => sendMove('E')}
        style={styles.buttonContainer}>
        <Text>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AxisPad;
