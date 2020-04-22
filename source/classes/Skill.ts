import { SKILLS, PLAYER_SIZE, ENEMY_SIZE } from '@source/Constants';
import { checkCircleCollision, calculateSkillDamage } from '@source/Helper';

class Skill {
  skill: object = null;
  skillName: string = null;
  constructor(skillName: string) {
    this.skillName = skillName;
    this.skill = SKILLS[skillName];

    return this;
  }

  get = () => {
    return this.skill;
  };

  calculateCollision = (enemyBody, playerBody) => {
    this.enemyBody = enemyBody;
    this.playerBody = playerBody;

    //skill dmg collision params for player
    const playerCollisionOptions = {
      position: {
        x: playerBody.position.x + PLAYER_SIZE / 2,
        y: playerBody.position.y + PLAYER_SIZE / 2,
      },
      radius: PLAYER_SIZE,
    };

    //skill dmg distance collision params for enemy
    const enemyCollisionOptions = {
      position: {
        x: enemyBody.position.x - enemyBody.bounds.x + ENEMY_SIZE / 2,
        y: enemyBody.position.y - enemyBody.bounds.y + ENEMY_SIZE / 2,
      },
      radius: ENEMY_SIZE,
    };

    // Check skill dmg and remove chr
    return checkCircleCollision(
      playerCollisionOptions,
      enemyCollisionOptions,
      this.skill.distance,
    );
  };

  getEffects = (time) => {
    return {
      x: this.enemyBody.position.x,
      y: this.enemyBody.position.y,
      width: this.skill.effect.width,
      height: this.skill.effect.height,
      color: this.skill.effect.color,
      expired: time.current + this.skill.duration, // time in game loop
      times: this.skill.effect.times, // skill dmg in time multiple times
      timesDuration: this.skill.effect.duration, // skill dmg in time multiple times between duration
      animation: this.skill.effect.animation,
      playerAnimation: this.skill.effect.playerAnimation,
    };
  };

  damage = () => {
    return calculateSkillDamage(this.skill);
  };
}

export default Skill;
