import GameLoop from './GameLoop';
import CreateMonster from './CreateMonster';

import MoveEnemy from './MoveEnemy';
import MovePlayer from './MovePlayer';
import Collisions from './Collisions';
import UseSkill from './UseSkill';
import SkillEffectRemover from './SkillEffectRemover';
import DropItem from './DropItem';
import Loot from './Loot';

export default [
  GameLoop,
  Collisions,
  Loot,
  UseSkill,
  SkillEffectRemover,
  CreateMonster,
  MovePlayer,
  DropItem,
  // MoveEnemy,
];
