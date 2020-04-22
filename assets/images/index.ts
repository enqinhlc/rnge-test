import { ANIMATIONS } from '@source/Constants';

export default {
  map: require('./map.png'),
  playerSprite: require('./player-sprite.png'),
  lrSprite: require('./lr-sprite-30.png'),
  iceSkill: require('./ice-sprite-30.png'),
  frSkill: require('./fire-sprite-30.png'),
  dragonSprite: require('./dragon-sprite-30.png'),
  playerWomanSprite: require('./woman-player-sprite.png'),
  demonSprite: require('./demon-sprite-64.png'),
  demonSpriteData: {
    [ANIMATIONS.DEMON.IDLE]: [0, 1, 2],
    [ANIMATIONS.DEMON.WALK]: [3, 4, 5, 6, 7, 8],
    [ANIMATIONS.DEMON.ATTACK]: [9, 10, 11, 12],
    [ANIMATIONS.DEMON.HURT]: [13, 14],
    [ANIMATIONS.DEMON.DEATH]: [15, 16, 17, 18, 19, 20],
  },
  medusa: {
    idle: [
      require('./medusa/Idle1.png'),
      require('./medusa/Idle2.png'),
      require('./medusa/Idle3.png'),
    ],
    walk: [
      require('./medusa/Walk1.png'),
      require('./medusa/Walk2.png'),
      require('./medusa/Walk3.png'),
      require('./medusa/Walk4.png'),
    ],
  },

  items: {
    item_1: {
      itemId: 123123123,
      image: require('./items/item_1.png'),
      title: 'Miğfer',
    },
    item_2: {
      itemId: 123123143,
      image: require('./items/item_2.png'),
      title: 'Matara',
    },
    item_3: {
      itemId: 121123143,
      image: require('./items/item_3.png'),
      title: 'Kutu',
    },
    item_4: {
      itemId: 128623143,
      image: require('./items/item_4.png'),
      title: 'Büyülü Kitap',
    },
    item_5: {
      itemId: 928623143,
      image: require('./items/item_5.png'),
      title: 'Yetenek Kitabı',
    },
    item_6: {
      itemId: 822823143,
      image: require('./items/item_6.png'),
      title: 'Yüce Kılıç',
    },
  },
};
