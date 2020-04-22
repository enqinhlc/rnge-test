import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import JoyStick from '@entities/JoyStick';
import { EVENTS, SKILL_NAMES } from '@source/Constants';

interface Style {
  container: ViewStyle;
  fireSkill: ViewStyle;
  iceSkill: ViewStyle;
  posionSkill: ViewStyle;
  attack: ViewStyle;
  text: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  fireSkill: {
    position: 'absolute',
    zIndex: 1,
    right: 20,
    bottom: 150,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(235,64,52,.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iceSkill: {
    position: 'absolute',
    zIndex: 1,
    right: 50,
    bottom: 100,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(37,124,163,.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posionSkill: {
    position: 'absolute',
    zIndex: 1,
    right: 75,
    bottom: 30,
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: 'rgba(218,112,214,.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attack: {
    position: 'absolute',
    zIndex: 1,
    right: 130,
    bottom: 100,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(137,224,163,.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { height: 1, width: 0 },
    textShadowRadius: 1,
  },
});

const Controllers = ({ gameEngine }) => {
  const useSkill = (name: string) => {
    gameEngine.dispatch({ type: EVENTS.USE_SKILL, value: name });
  };

  return (
    <>
      <JoyStick gameEngine={gameEngine} />
      <TouchableOpacity
        onPress={() => useSkill(SKILL_NAMES.FIRE)}
        style={styles.fireSkill}>
        <Text style={styles.text}>Nova</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => useSkill(SKILL_NAMES.ICE)}
        style={styles.iceSkill}>
        <Text style={styles.text}>Ice Storm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => useSkill(SKILL_NAMES.LIGHTNING)}
        style={styles.posionSkill}>
        <Text style={styles.text}>ThunderBolt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => useSkill(SKILL_NAMES.MELEE_SKILL_1)}
        style={styles.attack}>
        <Text style={styles.text}>Attack</Text>
      </TouchableOpacity>
    </>
  );
};

export default Controllers;
