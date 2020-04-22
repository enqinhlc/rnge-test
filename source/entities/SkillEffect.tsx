import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Images from '../../assets/images/index';
import SpriteSheet from 'rn-sprite-sheet';
import { ANIMATIONS } from '@source/Constants';

interface Style {
  skill: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  skill: {
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SkillEffect = ({ body: { position, bounds, size }, animation }) => {
  const lrSkill = useRef();
  const iceSkill = useRef();
  const frSkill = useRef();

  const { width, height } = size;

  const customStyle = {
    left: position.x - bounds.x,
    top: position.y - bounds.y,
  };

  useEffect(() => {
    if (animation === ANIMATIONS.SKILLS.ICE) {
      iceSkill.current.play({
        type: ANIMATIONS.SKILLS.ICE, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 30, // frames per second
        loop: true, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }
    if (animation === ANIMATIONS.SKILLS.LIGHTNING) {
      lrSkill.current.play({
        type: ANIMATIONS.SKILLS.LIGHTNING, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 4, // frames per second
        loop: true, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }
    if (animation === ANIMATIONS.SKILLS.FIRE) {
      frSkill.current.play({
        type: ANIMATIONS.SKILLS.FIRE, // (required) name of the animation (name is specified as a key in the animation prop)
        fps: 7, // frames per second
        loop: true, // if true, replays animation after it finishes
        onFinish: () => {}, // called when the animation finishes; will not work when loop === true
      });
    }
  }, [animation]);

  if (width) customStyle.width = width;
  if (height) customStyle.height = height;

  return (
    <View style={[styles.skill, customStyle]}>
      {animation === ANIMATIONS.SKILLS.LIGHTNING && (
        <SpriteSheet
          ref={lrSkill}
          source={Images.lrSprite}
          columns={2}
          rows={2}
          width={30}
          animations={{
            [ANIMATIONS.SKILLS.LIGHTNING]: [0, 1, 2, 3],
          }}
        />
      )}
      {animation === ANIMATIONS.SKILLS.ICE && (
        <SpriteSheet
          ref={iceSkill}
          source={Images.iceSkill}
          columns={6}
          rows={5}
          width={30}
          animations={{
            [ANIMATIONS.SKILLS.ICE]: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
            ],
          }}
        />
      )}
      {animation === ANIMATIONS.SKILLS.FIRE && (
        <SpriteSheet
          ref={frSkill}
          source={Images.frSkill}
          columns={5}
          rows={2}
          width={30}
          animations={{
            [ANIMATIONS.SKILLS.FIRE]: [0, 1, 2, 3, 4, 5, 6],
          }}
        />
      )}
    </View>
  );
};

export default SkillEffect;
