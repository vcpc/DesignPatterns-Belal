import { Character } from '../../interfaces/Factory Method/character';
import { CharacterFactory } from './character-factory';
import { Mage } from './mage';
/**
 * Class representing a Mage Factory that creates Mage characters.
 */
class MageFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Mage();
  }
}
