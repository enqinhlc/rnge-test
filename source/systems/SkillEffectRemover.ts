import { EVENTS, TAGS, SKILLS } from '@source/Constants';
import Skill from '@source/classes/Skill';

const SkillEffectRemover = (entities, { time, dispatch }) => {
  const skillEffectsFiltered = Object.keys(entities).filter((id) =>
    entities[id].tags.includes(TAGS.SKILL_EFFECT),
  );
  if (!skillEffectsFiltered.length) return entities;

  skillEffectsFiltered.map((id) => {
    const skillEffect = entities[id];

    if ('skillInTime' in skillEffect) {
      // console.log(skillEffect.skillInTime);
      const { skillInTime } = skillEffect;
      const { times, duration, lastEffected, target, skill } = skillInTime;

      // last effect, time, duration and multiple times calculate check
      if (lastEffected + duration < time.current && times > 0) {
        if (!entities.hasOwnProperty(target)) {
          delete entities[id];
        } else {
          const monster = entities[target];

          if (skill in SKILLS) {
            const useThisSkill = new Skill(skill);

            // last effected manipulation
            entities[id].skillInTime.times -= 1;
            entities[id].skillInTime.lastEffected = time.current;

            // calcualte skill dmg
            const damage = useThisSkill.damage();

            dispatch({
              type: EVENTS.USED_SKILL_FOR_CHAT,
              value: `${times} of ${
                useThisSkill.get().effect.times
              } -> ${damage} damage to ${monster.body.label}`,
            });

            if (damage >= monster.health) {
              // remove chr
              // Matter.World.remove(world, enemy.body);
              delete entities[target];

              // remove effect
              // Matter.World.remove(world, skillEffect.body);
              delete entities[id];

              //dispatch score
              dispatch({ type: EVENTS.MOB_KILL_SCORE });
              dispatch({ type: EVENTS.DROP_ITEM, ...monster.body });
            } else {
              //decrease health if enemy has more health than dmg
              entities[target].health -= damage;
            }

            if (
              entities.hasOwnProperty(id) &&
              entities[id].skillInTime.times === 0
            ) {
              // remove effect
              // Matter.World.remove(world, skillEffect.body);
              delete entities[id];
            }
          } // skill does not exists
        }
      }

      // multiple times finished! remove..
      if (times === 0) {
        // Matter.World.remove(world, skillEffect.body);
        delete entities[id];
      }
    }
  });

  return entities;
};

export default SkillEffectRemover;
