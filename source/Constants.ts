import { Dimensions } from 'react-native';

export const MAX_WIDTH: number = Dimensions.get('screen').width;
export const MAX_HEIGHT: number = Dimensions.get('screen').height;
export const ENEMY_SIZE: number = 32;
export const MONSTER_SIZE: number = 32;
export const PLAYER_SIZE: number = 32;
export const PLAYER_MAIN_AXIS: number = 50;
export const PLAYER_SAFE_DISTANCE: number = 300;
export const PLAYER_ATTACK_DISTANCE: number = 100;
export const BACKWALL_SIZE: number = 20;
export const PLAYER_START_X: number = MAX_WIDTH / 2 - PLAYER_SIZE / 2;
export const PLAYER_START_Y: number =
  MAX_HEIGHT - PLAYER_MAIN_AXIS - PLAYER_SIZE * 2;
export const BACKWALL_X: number = 0;
export const BACKWALL_Y: number = MAX_HEIGHT - BACKWALL_SIZE;

export const JOYSTICK_SIZE: number = 150;
export const JOYSTICK_X: number = 40;
export const JOYSTICK_Y: number =
  MAX_HEIGHT - JOYSTICK_SIZE - BACKWALL_SIZE - 15;
export const JOYSTICK_TRASHOLD: number = 50;
export const MAX_ENEMY_COUNT: number = 2;

export const IMAGE_DROP_SIZE: number = 32;

//EVENTS FOR GAME ENGINE
export const EVENTS = {
  GAME_STARTED: 'started',
  GAME_STOPPED: 'stopped',
  DROP_ITEM: 'EVENT_DROP_ITEM', // item drop trigger from mob
  DROPPED_ITEM: 'EVENT_DROPPED_ITEM',
  DROP_LOOT: 'DROP_LOOT', // Drop loot
  JOYSTICK_MOVE: 'EVENT_JOYSTICK_MOVE',
  PLAYER_STOP: 'EVENT_PLAYER_STOP',
  MOB_KILL_SCORE: 'MOB_KILL_SCORE',
  USE_SKILL: 'USE_SKILL',
  USED_SKILL_FOR_CHAT: 'USED_SKILL_FOR_CHAT',
  PLAYER_COORDS: 'PLAYER_COORDS',
};

//ANIMATIONS FOR ENTITIES
export const ANIMATIONS = {
  PLAYER: {
    SKILL: 'SKILL',
    WALK: 'WALK',
    STOP: 'STOP',
    IDLE: 'IDLE',
  },
  DEMON: {
    IDLE: 'IDLE',
    WALK: 'WALK',
    ATTACK: 'ATTACK',
    HURT: 'HURT',
    DEATH: 'DEATH',
  },
  SKILLS: {
    FIRE: 'FIRE',
    ICE: 'ICE',
    POSION: 'POSION',
    LIGHTNING: 'LIGHTNING',
    MELEE_SKILL_1: 'MELEE_SKILL_1',
  },
};

//TAGS FOR Entities
export const TAGS = {
  GROUND: 'GROUND',
  PLAYER: 'PLAYER',
  SKILL_EFFECT: 'SKILL_EFFECT',
  DROPPED_ITEM: 'DROPPED_ITEM', // item dropped from mob, ready to take
  MONSTER: 'MONSTER',
  BOSS: 'BOSS',
  ENEMY: 'ENEMY',
};

export const SKILL_NAMES = {
  FIRE: 'FIRE',
  ICE: 'ICE',
  LIGHTNING: 'LIGHTNING',
  POSION: 'POSION',
  MELEE_SKILL_1: 'MELEE_SKILL_1',
};

export const SKILLS = {
  [SKILL_NAMES.FIRE]: {
    id: 1,
    name: 'Fire Storm',
    duration: 1000,
    distance: 100,
    attack: 10.0,
    cooldown: 3,
    damage: 1,
    effect: {
      animation: ANIMATIONS.SKILLS.FIRE,
      playerAnimation: null,
      color: 'rgba(37,124,163,.85)',
      duration: 1000,
      times: 2,
      width: 50,
      height: 50,
    },
  },
  [SKILL_NAMES.ICE]: {
    id: 2,
    name: 'Ice Storm',
    duration: 1000,
    distance: 100,
    attack: 10.0,
    cooldown: 3,
    damage: 1,
    effect: {
      animation: ANIMATIONS.SKILLS.ICE,
      playerAnimation: null,
      color: 'rgba(37,124,163,.85)',
      duration: 1000,
      times: 2,
      width: 32,
      height: 32,
    },
  },
  [SKILL_NAMES.LIGHTNING]: {
    id: 3,
    name: 'Thunderbolt',
    duration: 1000,
    distance: 1000,
    attack: 10.0,
    cooldown: 10,
    damage: 2,
    effect: {
      animation: ANIMATIONS.SKILLS.LIGHTNING,
      playerAnimation: null,
      color: 'rgba(218,112,214,.85)',
      duration: 1500,
      times: 10,
      width: 32,
      height: 32,
    },
  },
  [SKILL_NAMES.POSION]: {
    id: 4,
    name: 'Posion Storm',
    duration: 1000,
    distance: 1000,
    attack: 10.0,
    cooldown: 10,
    damage: 2,
    effect: {
      animation: ANIMATIONS.SKILLS.POSION,
      playerAnimation: null,
      color: 'rgba(218,112,214,.85)',
      duration: 1500,
      times: 10,
      width: 32,
      height: 32,
    },
  },
  [SKILL_NAMES.MELEE_SKILL_1]: {
    id: 5,
    name: 'Blade',
    duration: 2000,
    distance: 10,
    attack: 10.0,
    cooldown: 10,
    damage: 2,
    effect: {
      animation: null,
      playerAnimation: ANIMATIONS.SKILLS.MELEE_SKILL_1,
      color: 'rgba(218,112,214,.85)',
      duration: 10,
      times: 1,
      width: 32,
      height: 32,
    },
  },
};
