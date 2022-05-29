import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Systems from '@systems/Systems';
import { Entities } from './levels/Level1';
import AxisPad from '@components/AxisPad';

console.disableYellowBox = true;

const GameScene = () => {
  return (
    <>
      <GameEngine
        style={[StyleSheet.absoluteFill]}
        entities={Entities}
        running={true}
        systems={Systems}>
        <StatusBar hidden={true} />
        <AxisPad />
      </GameEngine>
    </>
  );
};

export default GameScene;
