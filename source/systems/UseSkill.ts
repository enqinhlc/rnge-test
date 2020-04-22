import { EVENTS, TAGS } from '@source/Constants';
import SkillEffect from '@entities/SkillEffect';
import Skill from '@source/classes/Skill';
import Entitiy from '@source/classes/Entitiy';

const UseSkill = (entities, { events, dispatch, time }) => {
  const { player } = entities;

  const skillEffectLength = Object.keys(entities).filter((id) =>
    entities[id].tags.includes(TAGS.SKILL_EFFECT),
  ).length;

  if (events.length) {
    events
      .filter(({ type }) => type === EVENTS.USE_SKILL)
      .map((skillEvent) => {
        Object.keys(entities)
          .filter((id) => entities[id].tags.includes(TAGS.MONSTER))
          .map((id) => {
            /**
             * Monster: @monster
             * Skill: @useThisSkill instance of Skill
             * collision will return boolean result
             *        skill distance <= player coords <> monster coords
             */
            const monster = entities[id];
            const useThisSkill = new Skill(skillEvent.value);

            const collision = useThisSkill.calculateCollision(
              monster.body,
              player.body,
            );

            if (collision) {
              /**
               * @skillEffects: Skill Effects created new entitiy
               * if skill has no animation, it will bind player effect for melee characters
               */
              const skillEffects = useThisSkill.getEffects(time);

              if (skillEffects.playerAnimation !== null) {
                entities.player.animation = skillEffects.playerAnimation;
              }

              /**
               * Skill Effect Register
               * @entitiSkillPropName: unique name for entitiy system
               * @SkillEffectEntity: created body for entity
               */
              const entitiSkillPropName = `${TAGS.MONSTER}[${id}]_${TAGS.SKILL_EFFECT}[${useThisSkill.id}][${skillEffectLength}]`;

              const SkillEffectEntity = Entitiy.create({
                id: entitiSkillPropName,
                body: {
                  position: monster.body.position,
                  bounds: monster.body.bounds,
                  size: {
                    width: skillEffects.width,
                    height: skillEffects.height,
                  },
                },
                tags: [TAGS.SKILL_EFFECT],
                renderer: SkillEffect,
                custom: {
                  animation: skillEffects.animation,
                  skillInTime: {
                    skill: skillEvent.value,
                    times: skillEffects.times - 1,
                    duration: skillEffects.timesDuration,
                    lastEffected: time.current,
                    target: id,
                  },
                },
              });

              entities[entitiSkillPropName] = SkillEffectEntity;

              dispatch({
                type: EVENTS.USED_SKILL_FOR_CHAT,
                value: `${useThisSkill.get().name} used to ${
                  monster.body.label
                }.`,
              });

              /**
               * Calculate Skill Damage
               * if monster has les or equal health than damage, it is gonna die
               * else it will have less hp
               */
              const damage = useThisSkill.damage();
              if (damage >= monster.health) {
                delete entities[id];
                dispatch({ type: EVENTS.MOB_KILL_SCORE });
                dispatch({ type: EVENTS.DROP_ITEM, ...monster.body.position });
              } else {
                entities[id].health -= damage;
              }
            }
          });
      });
  }

  return entities;
};

export default UseSkill;
