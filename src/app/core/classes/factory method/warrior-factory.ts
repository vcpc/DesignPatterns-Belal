import { Character } from '../../interfaces/Factory Method/character';
import { CharacterFactory } from './character-factory';
import { Warrior } from './warrior';
/**
 * Class representing a Warrior Factory that creates Warrior characters.
 */
class WarriorFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Warrior();
  }
}
